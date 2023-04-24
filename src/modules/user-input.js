import { addAbove } from "./page-layout";

const content = document.querySelector('#content');
const sidebarItems = document.querySelector('#sidebar-items');

const openSidebarForm = () => {

};


const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSidebarInput = (input) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    addAbove(input, 'sidebar-item', 'div', sidebarItems, sidebarForm);
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

export { registerSidebarSubmitListener };