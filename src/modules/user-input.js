import { addAbove } from "./page-layout";

const content = document.querySelector('#content');
const sideBarItems = document.querySelector('#sidebar-items');

const openSideBarForm = () => {

};


const getInput = () => {
    return document.getElementById('folder-title').value;
};

const setSideBarInput = (input) => {
    const sideBarForm = document.querySelector('#sidebar-add-form');
    addAbove(input, 'sidebar-item', 'div', sideBarItems, sideBarForm);
};

const submitClicked = () => {
    const input = getInput();
    setSideBarInput(input);
};

const registerSideBarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitClicked();
    });
};

export { registerSideBarSubmitListener };