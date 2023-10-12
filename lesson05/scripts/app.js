// JavaScript for the Book of Mormon - Top 10 Application

function addChapter() {
    // Get the input element and the value
    const chapterInput = document.getElementById('favchap');
    const chapterValue = chapterInput.value;

    if (chapterValue.trim() === '') {
        alert('Please enter a valid chapter name.');
        return;
    }

    // Create a new list item and add the chapter name
    const chapterList = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.textContent = chapterValue;

    // Add a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        chapterList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);

    // Add the list item to the chapter list
    chapterList.appendChild(listItem);

    // Clear the input field
    chapterInput.value = '';
}
