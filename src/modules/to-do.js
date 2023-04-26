import { addButton } from "./page-layout";

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
};

const initToDo = () => {
    addToDoButton();
};

export { initToDo };