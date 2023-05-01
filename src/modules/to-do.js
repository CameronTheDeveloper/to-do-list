import '../styles/to-do.css';
import { addButton } from './page-layout';
import { registerAddToDoListener } from './user-input';

const contentItems = document.querySelector('#content-items');

function toDo(title, description) {
    return {
        title: title,
        description: description,
    };
}

const addToDoButton = () => {
    const addToDoButton = addButton(contentItems, '+ To Do', 'todo-add-button', 'button');
    registerAddToDoListener(addToDoButton);
};

const initToDo = () => {
    addToDoButton();
};

export { initToDo, toDo };