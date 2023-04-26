import { addButton } from "./page-layout";

const content = document.querySelector('#content');

function toDo(title) {
    return {
        title: title,
    };
}

const createToDo = (title) => {
    const newToDo = toDo(title);
};

const addToDoInput = () => {
    const addToDoButton = addButton(content, '+ To Do', 'to-do', 'button');
};

const initToDo = () => {
    addToDoInput();
};

export { initToDo };