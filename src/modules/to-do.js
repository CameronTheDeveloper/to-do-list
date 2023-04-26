import { addButton } from "./page-layout";
import { registerAddToDoListener } from "./user-input";

const contentItems = document.querySelector('#content-items');

function toDo(title) {
    return {
        title: title,
    };
}

const createToDo = (title) => {
    const newToDo = toDo(title);
};

const addToDoButton = () => {
    const addToDoButton = addButton(contentItems, '+ To Do', 'to-do', 'button');
    registerAddToDoListener(addToDoButton);
};

const initToDo = () => {
    addToDoButton();
};

export { initToDo };