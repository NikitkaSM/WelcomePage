const form = document.querySelector('.js-form');
const input = document.querySelector('input');
const greetings = document.querySelector('.js-greetings');
const userLocalStorage = 'currentUsername';
const showingClassName = 'showing';

function submitHandler(event) {
    event.preventDefault();
    const inputValue = input.value;
    showGreeting(inputValue);
    saveUsername(inputValue);
}

function saveUsername(username) {
    localStorage.setItem(userLocalStorage, username)
}

function showGreeting(name) {
    greetings.innerText = `Привет, ${name}`;
    greetings.classList.add(showingClassName);
    form.classList.remove(showingClassName);
}

function askForUsername() {
    form.classList.add(showingClassName)
    form.addEventListener('submit', submitHandler)
}

function loadUsername() {
    const currentUsername = localStorage.getItem(userLocalStorage);
    if (currentUsername === null) {
        askForUsername()
    } else {
        showGreeting(currentUsername);
    }
}


function init() {
    loadUsername();
}

init();

