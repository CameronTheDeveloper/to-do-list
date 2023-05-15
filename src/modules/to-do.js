import '../styles/to-do.css';
import {
    addButton,
    addToDoForm,
    displayToDo
} from './page-layout';
import {
    registerAddToDoListener,
    getInput,
    getRadioInput
} from './user-input';
import { getActiveFolder } from './to-do-folders';

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
    const addToDoButton = addButton(toDoInputs, '+ To Do', 'todo-add-button', 'button');
    const toDoForm = document.querySelector('#todo-add-form');

    registerAddToDoListener(addToDoButton);
};

const addToDo = () => {
    const title = getInput('title-input');
    const dueDate = new Date();             //
    const year = dueDate.getFullYear();     //
    const priority = getRadioInput('priority-input');
    const description = getInput('description-input');
    const toDoItem = toDo(title, year, priority, description);
    const folder = getActiveFolder();


    displayToDo(toDoItem, folder);
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};



export { initToDo, addToDo };