import { addClearEventListener } from "./clear-mode";
import { addAttributes } from "./attributes";
import {
    addFormDateElements,
    addFormRadioElements
} from "./form-dom.js";
import { format, addYears } from "date-fns";

const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFolderChildElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const setToDoDueDateInput = (form) => {
    const today = new Date();
    const minDate = format(today, 'yyyy-MM-dd');
    const id = 'duedate-input';
    const name = 'todo-duedate';
    const maxDate = addYears(today, 75);
    const formattedMaxDate = format(maxDate, 'yyyy-MM-dd');
    addFormDateElements(form, minDate, formattedMaxDate, minDate, id, name);
};

const setRadioFormElements = (fieldset, name, optionsAr) => {
    for (let i = 0; i < optionsAr.length; i++) {
        const parentDiv = document.createElement('div');
        fieldset.appendChild(parentDiv);
        addFormRadioElements(parentDiv, name, optionsAr[i]);
    }
};

const createFieldset = (legendText) => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');

    fieldset.appendChild(legend);
    legend.innerHTML = legendText;
    return fieldset;
};


const setToDoPriorityInput = (form) => {
    const optionsAr = ['Low', 'Medium', 'High'];
    const fieldset = createFieldset('Priority: ');
    setRadioFormElements(fieldset, 'priority-input', optionsAr);
    form.appendChild(fieldset);
};
//Maybe change this function to toggle parameter visible
const toggleToDoFormVisible = () => {
    const toDoForm = document.querySelector('#todo-add-form');

    if (toDoForm.style.display === 'none') {
        toDoForm.style.display = 'grid';
    } else if (toDoForm.style.display === 'grid') {
        toDoForm.style.display = 'none';
    } else {
        toDoForm.style.display = 'grid';
    }
};

const addToDoContent = (toDoItem) => {
    const toDoContentDiv = document.createElement('div');
    const dueDateDiv = addAttributes('Due: ' + toDoItem.dueDate, 'class', 'due-date', 'div');
    const priorityDiv = addAttributes(toDoItem.priority, 'class', 'priority', 'div');
    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

    toDoContentDiv.setAttribute('class', 'todo-content');
    toDoContentDiv.appendChild(dueDateDiv);
    toDoContentDiv.appendChild(priorityDiv);
    toDoContentDiv.appendChild(descDiv);
    return toDoContentDiv;
    //To add 'todo expand' feature, hide toDoContentDiv when clicked
};

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = addAttributes('', 'class', 'todo', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const toDoContentDiv = addToDoContent(toDoItem);

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(toDoContentDiv);
    addClearEventListener(toDoParent);
};

const addButtonType = (button, type) => {
    button.setAttribute('type', type);
};

const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = addAttributes('', 'class', className, elementType);
    parent.insertBefore(element, lowerDiv);
    return element;
};

const addButton = (parent, text, id, type) => {
    const button = addAttributes(text, 'id', id, 'button');
    addButtonType(button, type);
    parent.appendChild(button);
    return button;
};

const hideElements = (elements) => {
    elements.forEach((element) => {
        element.style.display = 'none';
    });
};

export {
    addContent,
    addButton,
    addAbove,
    toggleToDoFormVisible,
    displayToDo,
    hideElements,
    addFolderChildElements,
    setToDoDueDateInput,
    setToDoPriorityInput
};