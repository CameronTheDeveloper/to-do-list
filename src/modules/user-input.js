import { addAbove, addRemoveButton, addToDoForm } from "./page-layout";

const sidebarItems = document.querySelector('#sidebar-items');
const contentItems = document.querySelector('#content-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSidebarFormItemElements = (parent, input) => {
    const title = document.createElement('div');
    const removeButton = addRemoveButton(parent, 'X', 'remove-folder');

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
    setSidebarFormItemElements(item, input);
};

/* Change this for reuse*/
const submitClicked = () => {
    const input = getInput('folder-title');
    setSidebarInput(input);
};

const toggleButtonStyle = (button) => {
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitClicked();
        input.value = '';
    });
};

const registerRemoveListener = (button, element) => {
    button.addEventListener('click', () => {
        element.remove();
    });
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleButtonStyle(button);
        addToDoForm(contentItems);
    });
};

export {
    registerSidebarSubmitListener,
    registerRemoveListener,
    registerAddToDoListener
};