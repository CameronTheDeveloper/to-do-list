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

const submitClicked = () => {
    const input = getInput('folder-title');
    setSidebarInput(input);
};

const registerSidebarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitClicked();
    });
};

export { registerSidebarSubmitListener };