let todoList = JSON.parse(localStorage.getItem('todoList')) || []; 
displayItem();

function addToDo() {
    let inputElement = document.querySelector("#todo-input");
    let DateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let todoDate = DateElement.value;

    if (todoItem && todoDate) { 
        todoList.push({ item: todoItem, dueDate: todoDate });
        inputElement.value = '';
        DateElement.value = '';
        updateLocalStorage();
        displayItem(); 
    } else {
        alert("Please enter both a to-do item and a due date.");
    }
}

function displayItem() {
    let containerElement = document.querySelector(".todo-container");

    let newHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHTML += `
            
                <span>${item}</span>    
                <span>${dueDate}</span>
                <button id="Btn-delete" onclick="deleteItem(${i});">Delete</button>
           
        `;
    }
    containerElement.innerHTML = newHTML;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    updateLocalStorage();
    displayItem();
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
