import {
    addAbove,
    addRemoveButton,
    addToDoForm,
    displayToDo,
    toggleToDoFormVisible
} from "./page-layout";
import { toDo } from "./to-do";
import { addToDoFolder } from "./to-do-folders";

const sidebarItems = document.querySelector('#sidebar-items');
const contentItems = document.querySelector('#content-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

/* Sidebar */

const setSidebarFormItemElements = (parent, input) => {
    const title = document.createElement('div');
    const removeButton = addRemoveButton(parent, 'X', 'remove-folder-button');

    title.innerHTML = input;
    addFormItemElements(parent, title, removeButton);
};

const addFormItemElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const setSidebarInput = (input) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = addAbove('sidebar-item', 'div', sidebarItems, sidebarForm);
    const folder = addToDoFolder(input);  // Folder
    setSidebarFormItemElements(item, input);
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    return input;
};

const manageSidebarInput = () => {
    const input = getSidebarInput();
    setSidebarInput(input);
    //folder = setSidebarInput(input)
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        manageSidebarInput();
        //getSidebarInput();
        resetForm(form);
    });
};

const removeFolder = () => {

};

const registerRemoveListener = (button, element) => {
    button.addEventListener('click', () => {
        console.log(element);
        element.remove();
    });
};

/* To Do */

const toggleAddToDoButtonDisplay = () => {
    const button = document.querySelector('#todo-add-button');
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};

const addToDo = () => {
    const title = getInput('title-input');
    const description = getInput('description-input');
    const toDoItem = toDo(title, description);
    const toDoForm = document.querySelector('#todo-add-form');
    displayToDo(toDoItem, contentItems, toDoForm);
};

const resetForm = (form) => {
    form.reset();
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
        resetForm(form);
    });
};

export {
    registerSidebarSubmitListener,
    registerRemoveListener,
    registerAddToDoListener,
    registerToDoSubmitListener
};