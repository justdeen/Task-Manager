// Retrieving html elements to store them in JavaScript variables 
const listContainer = document.getElementById('list-container')
const input = document.getElementById('input')

// Onclick function for adding a new task
function tap(){
    if(input.value === ''){
        alert('Enter a new to-do!')
        return;
    }

    // Creates a new div which nests the added task each time a task is added
    let list = document.createElement('div')
    list.innerHTML = input.value
    listContainer.appendChild(list)
    list.className = 'list'

    // Creates a new button (used for removing a task) each time a task is added
    let button1 = document.createElement('button');
    button1.innerHTML = '-'
    listContainer.appendChild(button1);
    button1.className = 'button1'
    
    input.value = ''
    saveData();
}

// Listens for when the task or the button associated to that task is clicked
listContainer.addEventListener('click', function(e){

    // Toggles the custom css 'checked' class assigned to each task when a task is clicked
    if(e.target.tagName === 'DIV'){
        e.target.classList.toggle('checked')
        saveData();
    } 

    // Removes the task associated with button when the button is clicked
    else if (e.target.tagName === 'BUTTON'){
        e.target.previousElementSibling.remove();
        e.target.remove();
        saveData();
    } 
})

// Function for saving data in local storage using a key-value pair
function saveData(){
    localStorage.setItem("data1", listContainer.innerHTML);
}

// Function for displaying the changes made to the website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data1");
}
showTask();
