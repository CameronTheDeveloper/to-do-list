import '../styles/to-do.css';
import {
    addButton,
    displayToDo
} from './page-layout';
import {
    registerAddToDoListener,
    getInput,
    getRadioInput
} from './user-input';
import { getActiveFolder } from './to-do-folders';
import { addToDoForm } from './form-dom';

const toDoInputs = document.querySelector('#todo-inputs');

function toDo(title, dueDate, priority, description) {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description,
    };
}

const addToDoButton = () => {
    const addToDoButton = addButton(toDoInputs, 'button', 'todo-add-button', 'active', '+ To Do');

    registerAddToDoListener(addToDoButton);
};

const addToDo = () => {
    const title = getInput('title-input');
    const dueDate = getInput('duedate-input');
    const priority = getRadioInput('priority-input');
    const description = getInput('description-input');
    const toDoItem = toDo(title, dueDate, priority, description);
    const folder = getActiveFolder();

    displayToDo(toDoItem, folder);
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};



export { initToDo, addToDo };