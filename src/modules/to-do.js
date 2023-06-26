import '../styles/to-do.css';
import {
    addButton,
    displayToDo
} from './page-dom';
import {
    registerAddToDoListener
} from './user-input';
import { getActiveFolder } from './to-do-folders';
import { addToDoForm } from './form-dom';

const toDoInputs = document.querySelector('#todo-inputs');

const toDo = (title, dueDate, priority, description, key) => {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description,
        key: key,
    };
};

const addToDoButton = () => {
    const addToDoButton = addButton(toDoInputs, 'button', 'todo-add-button', 'active', '+ To Do');
    registerAddToDoListener(addToDoButton);
};

const addToDo = (title, dueDate, priority, description) => {
    const toDoItem = toDo(title, dueDate, priority, description);
    const folder = getActiveFolder();
    displayToDo(toDoItem, folder);
    return toDoItem;
};

const initToDo = () => {
    addToDoForm(toDoInputs);
    addToDoButton();
};


export { initToDo, addToDo };