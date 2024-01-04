function addText() {

    var text = document.getElementById("textInput").value;
    var output = document.getElementById("content-placeholder");
    if(text.trim()===''){
        alert("Write something");
    }
    else{
   // Get references to the input field, add button, and the content placeholder
const inputField = document.getElementById('textInput');
const addButton = document.querySelector('.button');
const contentPlaceholder = document.getElementById('content-placeholder');

// Add click event listener to the "Add" button
addButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    
    if (inputValue !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listItem.className='list-item';


        // Create a delete button (cross button)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-button';
        // Add a click event listener to the delete button
        deleteButton.addEventListener('click', () => {
            listItem.remove(); // Remove the list item when the button is clicked
        });


        listItem.appendChild(deleteButton);
        contentPlaceholder.appendChild(listItem);

        // Clear the input field
        inputField.value = '';
    }
    });
    }
}

