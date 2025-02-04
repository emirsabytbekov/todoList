// Retrieve todo from a local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem('todo')) || [];