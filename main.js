/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllPosts() {
    const myPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await myPosts.json();
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllUsers() {
    const myUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    return await myUsers.json();
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments(postID) {
    const myComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
    return await myComments.json();
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser(userID) {
    const myUsers = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userID}`);
    return await myUsers.json();
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

async function getTodosForUser(userID) {
    const myTodo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
    return await myTodo.json();
}