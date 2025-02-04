// Retrieve todo from a local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem('todo')) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const todoButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

