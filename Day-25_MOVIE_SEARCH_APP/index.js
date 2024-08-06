document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modal-body');
    const span = document.getElementsByClassName("close")[0];

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`)
            .then(response => response.json())
            .then(data => {
                moviesContainer.innerHTML = '';
                if (data.Search) {
                    data.Search.forEach(movie => {
                        const movieElement = document.createElement('div');
                        movieElement.classList.add('movie');
                        movieElement.innerHTML = `
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <h2>${movie.Title}</h2>
                            <p>${movie.Year}</p>
                            <button class="more-info" data-id="${movie.imdbID}">More Info</button>
                        `;
                        moviesContainer.appendChild(movieElement);
                    });
                    addMoreInfoEventListeners();
                } else {
                    moviesContainer.innerHTML = '<p>No movies found.</p>';
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function addMoreInfoEventListeners() {
        const moreInfoButtons = document.querySelectorAll('.more-info');
        moreInfoButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const movieId = event.target.getAttribute('data-id');
                fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${movieId}`)
                    .then(response => response.json())
                    .then(data => {
                        modalContent.innerHTML = `
                            <h2>${data.Title}</h2>
                            <p><strong>Year:</strong> ${data.Year}</p>
                            <p><strong>Plot:</strong> ${data.Plot}</p>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Actors:</strong> ${data.Actors}</p>
                        `;
                        modal.style.display = "block";
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });
        });
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});