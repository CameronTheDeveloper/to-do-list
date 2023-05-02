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

//This needs to happen after form is added
const addToDoButton = () => {
    const addToDoButton = addButton(contentItems, '+ To Do', 'todo-add-button', 'button');
    const toDoForm = document.querySelector('#todo-add-form');

    registerAddToDoListener(addToDoButton);
};

const initToDo = () => {
    addToDoForm(contentItems);
    addToDoButton();
};

export { initToDo, toDo };