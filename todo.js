const listContainer = document.getElementById('list-container')
const input = document.getElementById('input')

function tap(){
    if(input.value === ''){
        alert('Enter a new to-do!')
        return;
    }
    
    let list = document.createElement('div')
    list.innerHTML = input.value
    listContainer.appendChild(list)
    list.className = 'list'
    
    let button1 = document.createElement('button');
    button1.innerHTML = '-'
    listContainer.appendChild(button1);
    button1.className = 'button1'
    
    input.value = ''
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'DIV'){
        e.target.classList.toggle('checked')
        saveData();
    }   
    else if (e.target.tagName === 'BUTTON'){
        e.target.previousElementSibling.remove();
        e.target.remove();
        saveData();
    } 
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();