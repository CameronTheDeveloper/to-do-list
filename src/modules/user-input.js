import { addAbove } from "./page-layout";

const content = document.querySelector('#content');
const sideBarItems = document.querySelector('#sidebar-items');
const sideBarForm = document.querySelectorAll('#sidebar-add-form');

const openSideBarForm = () => {

};

const getSideBarInput = () => {
    return document.getElementById('folder-title').value;
};

const setSideBarInput = (input) => {
    addAbove(input, 'sidebar-item', 'div', sideBarItems, sideBarForm);
};

const registerSideBarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = getSideBarInput();
        setSideBarInput(input);
    });
};

export { registerSideBarSubmitListener };