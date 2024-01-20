let todoItemsContainer = document.getElementById("todoItemsContainer");
let butnAddElement = document.getElementById("addToDoButn");
let saveTodoButton = document.getElementById("saveTodoButton");

function getItemsFromLocalStorage() {
    let stringifiedItem = localStorage.getItem("todoList");
    let parsedItem = JSON.parse(stringifiedItem);
    if (parsedItem === null) {
        return [];
    } else {
        return parsedItem;
    }
}

let todoList = getItemsFromLocalStorage();

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

butnAddElement.onclick = function() {
    onAddTodo();
};


function onCheckedTodo(checkboxId, labelId) {
    let labelIdElement = document.getElementById(labelId);
    labelIdElement.classList.toggle("checked");
}

function onDeleteToDo(todoItemContainerId) {
    todoElement = document.getElementById(todoItemContainerId);
    // console.log(parseInt(todoItemContainerId.slice(8)));
    todoItemsContainer.removeChild(todoElement);
    for(let el of todoList) {
        if(el.UniqueNo === parseInt(todoItemContainerId.slice(8))) {
            todoList.splice(todoList.indexOf(el), 1);
        }
    }
}

function createAndAppendToDo(todo) {
    let checkboxId = "checkbox" + todo.UniqueNo;
    let labelId = "label" + todo.UniqueNo;
    let todoItemContainerId = "todoItem" + todo.UniqueNo;

    let todoItemContainer = document.createElement("li");
    todoItemContainer.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemContainer.id = todoItemContainerId;
    todoItemsContainer.appendChild(todoItemContainer);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoItemContainer.appendChild(inputElement);
    inputElement.onclick = function() {
        onCheckedTodo(checkboxId, labelId);
    };

    let lableContainer = document.createElement("div");
    lableContainer.classList.add("d-flex", "flex-row", "label-container");
    todoItemContainer.appendChild(lableContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    lableContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    lableContainer.appendChild(deleteIconContainer);

    let iconElement = document.createElement("i");
    iconElement.classList.add("far", "fa-trash-alt", "delete-icon");
    iconElement.onclick = function() {
        onDeleteToDo(todoItemContainerId);
    };
    deleteIconContainer.appendChild(iconElement);
}

function onAddTodo() {
    let todosCount = todoList.length;
    todosCount = todosCount + 1;

    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter a Valid Input");
        return;
    }

    let newTodo = {
        text: userInputValue,
        UniqueNo: todosCount
    };
    todoList.push(newTodo);
    createAndAppendToDo(newTodo);
    userInputElement.value = "";
}

for (let todo of todoList) {
    createAndAppendToDo(todo);
}
