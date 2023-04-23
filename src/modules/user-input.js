import { addAbove } from "./page-layout";

const content = document.querySelector('#content');
const sideBarItems = document.querySelector('#sidebar-items');

const openSideBarForm = () => {

};


const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSideBarInput = (input) => {
    const sideBarForm = document.querySelector('#sidebar-add-form');
    addAbove(input, 'sidebar-item', 'div', sideBarItems, sideBarForm);
};

const submitClicked = () => {
    const input = getInput('folder-title');
    setSideBarInput(input);
};

const registerSideBarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitClicked();
    });
};

export { registerSideBarSubmitListener };