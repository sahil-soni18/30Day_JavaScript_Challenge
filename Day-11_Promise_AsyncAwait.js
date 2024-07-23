// Activity 1: Understanding Promises

//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1: Promise resolved after 2 seconds");
    }, 2000);
  });
  
  promise1.then((message) => {
    console.log(message);
  });
  
  //Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Task 2: Promise rejected after 2 seconds"));
    }, 2000);
  });
  
  promise2.catch((error) => {
    console.error(error.message);
  });
  
  // Activity 2: Chaining Promises
  
  //Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
  
  const fetchData = (data, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  fetchData("Fetching data 1", 1000)
    .then((message1) => {
      console.log(message1);
      return fetchData("Fetching data 2", 1000);
    })
    .then((message2) => {
      console.log(message2);
      return fetchData("Fetching data 3", 1000);
    })
    .then((message3) => {
      console.log(message3);
    });
  
  //Activity 3: Using Async/Await
  
  //Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
  
  const resolveAfter2Seconds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 4: Resolved after 2 seconds");
      }, 2000);
    });
  };
  
  const asyncFunction1 = async () => {
    const result = await resolveAfter2Seconds();
    console.log(result);
  };
  
  asyncFunction1();
  
  //Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
  
  const rejectAfter2Seconds = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Task 5: Rejected after 2 seconds"));
      }, 2000);
    });
  };
  
  const asyncFunction2 = async () => {
    try {
      const result = await rejectAfter2Seconds();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  asyncFunction2();
  
  
  //Activity 4: Fetching Data from an API
  
  //Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
  
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
      console.log('Task 6:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  
  //Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
  
  const fetchDataAsync = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log('Task 7:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchDataAsync();
  
  
  // Activity 5: Concurrent Promises
  
  //Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
  
  const promiseA = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise A resolved");
    }, 1000);
  });
  
  const promiseB = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise B resolved");
    }, 2000);
  });
  
  const promiseC = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise C resolved");
    }, 3000);
  });
  
  Promise.all([promiseA, promiseB, promiseC])
    .then((values) => {
      console.log("Task 8:", values);
    });
  
  //Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
  
  const promiseX = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise X resolved first");
    }, 1000);
  });
  
  const promiseY = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Y resolved first");
    }, 2000);
  });
  
  const promiseZ = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Z resolved first");
    }, 3000);
  });
  
  Promise.race([promiseX, promiseY, promiseZ])
    .then((value) => {
      console.log("Task 9:", value);
    });