import { addAbove, addRemoveButton } from "./page-layout";

const content = document.querySelector('#content');
const sidebarItems = document.querySelector('#sidebar-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSidebarInput = (input) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = addAbove('sidebar-item', 'div', sidebarItems, sidebarForm);
    addFormItemElements(item, input);

};

//Parent = sidebar-item
const setFormItemElements = (parent, input) => {
    const title = document.createElement('div');
    const removeButton = addRemoveButton();

    title.innerHTML = input;
    addFormItemElements(parent, title, removeButton);
};

const addFormItemElements = (title, removeButton) => {

    parent.appendChild(folderTitle);
    parent.appendChild(removeButton);
};

//addAbove is creating the sidebar-item and appending above form
//We need to create the sidebar-item, add title and x button, then add above

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