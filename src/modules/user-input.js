import { addAbove, addRemoveButton } from "./page-layout";

const content = document.querySelector('#content');
const sidebarItems = document.querySelector('#sidebar-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

//Parent = sidebar-item
const setFormItemElements = (parent, input) => {
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
    setFormItemElements(item, input);
};

/* Change this for reuse*/
const submitClicked = () => {
    const input = getInput('folder-title');
    setSidebarInput(input);
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

export { registerSidebarSubmitListener, registerRemoveListener };