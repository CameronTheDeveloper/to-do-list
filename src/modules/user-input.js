import {
    addAbove,
    addRemoveButton,
    addToDoForm,
    displayToDo
} from "./page-layout";
import { toDo } from "./to-do";

const sidebarItems = document.querySelector('#sidebar-items');
const contentItems = document.querySelector('#content-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSidebarFormItemElements = (parent, input) => {
    const title = document.createElement('div');
    const removeButton = addRemoveButton(parent, 'X', 'remove-folder-button');

    title.innerHTML = input;
    addFormItemElements(parent, title, removeButton);
};

//Only used for sidebar
const addFormItemElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const setSidebarInput = (input) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = addAbove('sidebar-item', 'div', sidebarItems, sidebarForm);
    setSidebarFormItemElements(item, input);
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    setSidebarInput(input);
};

const toggleButtonDisplay = (button) => {
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};


const addToDo = () => {
    const title = getInput('todo-title');
    const description = getInput('todo-description');
    const toDoItem = toDo(title, description);
    console.log(toDoItem.title);
    displayToDo(toDoItem, contentItems);
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        getSidebarInput();
        input.value = '';
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
    });
};

const registerRemoveListener = (button, element) => {
    button.addEventListener('click', () => {
        element.remove();
    });
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleButtonDisplay(button);
        addToDoForm(contentItems);
    });
};

export {
    registerSidebarSubmitListener,
    registerRemoveListener,
    registerAddToDoListener,
    registerToDoSubmitListener
};