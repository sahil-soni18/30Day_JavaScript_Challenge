// Activity 1: Object Creation and Access

// Task 1:

const book = {
    title: "A Brief History Of Time",
    Author: "Stephen Hawking",
    Year: 1988,
};

console.log(book);

// Task 2:

console.log(`The Book ${book.title} was published in ${book.Year}, and the author is sir ${book.Author}..`);


// Activity 2: Object Methods

// Task 3:

book.info = () => {
    return `The Book ${book.title} was published in ${book.Year}, and the author is sir ${book.Author}..`
};

console.log(book.info());

// Task 4:

book.updateYear = (year) => {
    return book.Year = year;
}

book.updateYear(2000);

console.log(`The updated object is: ${JSON.stringify(book)}`);

// Activity 3: Nested Objects

// Task 5:

const library = {
    nameOfLibrary: "Spacology",
    book1: {
        title: "Brief Answers to the Big Questions",
        Author: "Stephen Hawking",
        Year: 2018,
    },
    book2: {
        title: "The Universe in a Nutshell",
        Author: "Stephen Hawking",
        Year: 2001,
    },
};

console.log(library);

// Task 6:

console.log(`The Library ${library.nameOfLibrary}, Contains Books:`);
let count = 1;
for (const key in library) {
    if (library[key].title) {
        console.log(`${count}. ${library[key].title}`);
        count++;
    }
};


// Activity 4: The "This" Keyword

// Task 7

book.useThis = function () {
    return "The Book " +  this.title + "  was published in" +  this.Year + ",  and the author is sir  " + this.Author;
}

const response = book.useThis();

console.log(response);

// Activty 5: Object Iteration

// Task 8

for (let key in library) {
    console.log(key);
};

// Task 9

console.log(Object.keys(book));
console.log(Object.values(book));



export default book;
