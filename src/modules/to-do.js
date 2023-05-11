import '../styles/to-do.css';
import { addButton, addToDoForm } from './page-layout';
import { registerAddToDoListener } from './user-input';
import { addClearEventListener } from "./clear-mode";
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

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = addAttributes('', 'class', 'todo', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(descDiv);

    addClearEventListener(toDoParent);
};

export { initToDo, toDo, displayToDo };