import '../styles/to-do.css';
import {
    addButton,
    displayToDo
} from './page-dom';
import {
    registerAddToDoListener,
    getInput,
    getRadioInput
} from './user-input';
import { getActiveFolder } from './to-do-folders';
import { addToDoForm } from './form-dom';
import { storeToDo } from './storage';

const toDoInputs = document.querySelector('#todo-inputs');

const toDo = (title, dueDate, priority, description, key, folderValue) => {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description,
        key: key,
        folderValue: folderValue,
    };
};

const addToDoButton = () => {
    const addToDoButton = addButton(toDoInputs, 'button', 'todo-add-button', 'active', '+ To Do');
    registerAddToDoListener(addToDoButton);
};

const addToDoInputs = () => {
    const title = getInput('title-input');
    const dueDate = getInput('duedate-input');
    const priority = getRadioInput('priority-input');
    const description = getInput('description-input');
    const toDoItem = toDo(title, dueDate, priority, description);
    return toDoItem;
};

const addToDo = () => {
    const toDoItem = addToDoInputs();
    const folder = getActiveFolder();
    storeToDo(toDoItem);
    displayToDo(toDoItem, folder);
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};



export { initToDo, addToDo };