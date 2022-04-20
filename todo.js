const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('.js-toDoList')
const toDosFromLocalStorage = 'toDos';
let toDos = [];

function loadToDos() {
    const loadedToDos = localStorage.getItem(toDosFromLocalStorage);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            showToDos(toDo.name)
        });
    }
}

function saveToDos() {
    localStorage.setItem(toDosFromLocalStorage, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const button = event.target;
    const li = button.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function showToDos(text) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    deleteButton.innerHTML = '❌';
    deleteButton.addEventListener('click', deleteToDo)
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObject = {
        name: text,
        id: newId
    }
    toDos.push(toDoObject);
    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDos(currentValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', submitHandler);
}

init();
