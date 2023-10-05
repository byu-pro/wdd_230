// Wait for the HTML document to be fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here

    // Example: Change the background color of the header
    const header = document.querySelector("header");
    header.style.backgroundColor = "#333";

    // Example: Add a click event listener to a button
    const button = document.querySelector(".cta a");
    button.addEventListener("click", function () {
        alert("Button clicked!");
    });

    // More JavaScript code...
});
