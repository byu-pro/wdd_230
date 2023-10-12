// JavaScript for the Book of Mormon - Top 10 Application

// Declare const variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Populate the li element's textContent with the input value
        li.textContent = input.value;

        // Populate the delete button textContent with ❌
        deleteButton.textContent = '❌';

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list in your HTML
        list.append(li);

        // Add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Send the focus to the input element
        input.focus();

        // Clear the input value
        input.value = '';
    } else {
        // Provide a message or at least do nothing and return focus to the input field
        input.focus();
    }
});
