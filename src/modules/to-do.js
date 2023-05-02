import '../styles/to-do.css';
import { addButton, addToDoForm } from './page-layout';
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
    const toDoForm = document.querySelector('#todo-add-form');
    registerAddToDoListener(addToDoButton, toDoForm);
};

const initToDo = () => {
    addToDoButton();
    addToDoForm(contentItems);
};

export { initToDo, toDo };