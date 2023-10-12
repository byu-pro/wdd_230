// JavaScript for the Book of Mormon Favorite Chapters Application

function addChapter() {
    // Get the input element and the value
    const chapterInput = document.getElementById('chapter-input');
    const chapterValue = chapterInput.value;

    if (chapterValue.trim() === '') {
        alert('Please enter a valid chapter name.');
        return;
    }

    // Create a new list item and add the chapter name
    const chapterList = document.getElementById('chapter-list');
    const listItem = document.createElement('li');
    listItem.textContent = chapterValue;

    // Add a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        chapterList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);

    // Add the list item to the chapter list
    chapterList.appendChild(listItem);

    // Clear the input field
    chapterInput.value = '';
}
