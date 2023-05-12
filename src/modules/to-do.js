import '../styles/to-do.css';
import {
    addButton,
    addToDoForm,
    displayToDo
} from './page-layout';
import { registerAddToDoListener, getInput } from './user-input';
import { getActiveFolder } from './to-do-folders';

const toDoInputs = document.querySelector('#todo-inputs');

function toDo(title, priority, description) {
    return {
        title: title,
        priority: priority,
        description: description,
    };
}

const addToDoButton = () => {
    const addToDoButton = addButton(toDoInputs, '+ To Do', 'todo-add-button', 'button');
    const toDoForm = document.querySelector('#todo-add-form');

    registerAddToDoListener(addToDoButton);
};

const addToDo = () => {
    const title = getInput('title-input');
    const description = getInput('description-input');
    const priority = getInput('priority-input');
    const toDoItem = toDo(title, priority, description);
    const folder = getActiveFolder();
    displayToDo(toDoItem, folder);
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};



export { initToDo, addToDo };