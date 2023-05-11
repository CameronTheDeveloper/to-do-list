import '../styles/to-do.css';
import { addButton, addToDoForm } from './page-layout';
import { registerAddToDoListener } from './user-input';
import { addAttributes } from './attributes';

const toDoInputs = document.querySelector('#todo-inputs');

function toDo(title, description) {
    return {
        title: title,
        description: description,
    };
}

//This needs to happen after form is added
const addToDoButton = () => {
    const addToDoButton = addButton(toDoInputs, '+ To Do', 'todo-add-button', 'button');
    const toDoForm = document.querySelector('#todo-add-form');

    registerAddToDoListener(addToDoButton);
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};



export { initToDo, toDo };