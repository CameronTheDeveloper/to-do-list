import { addToDoClickEventListener } from "./to-do-mode";
import { addAttributes, addButtonAttributes } from "./attributes";
import {
    addFormDateElements,
    addFormRadioElements
} from "./form-dom.js";
import { format, addYears, parse } from "date-fns";

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

const formatToDoDate = (date) => {
    const dateString = date.toString();
    const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const formattedDate = format(parsedDate, 'MMMM dd, yyyy');

    return formattedDate;
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


const addToDoPriorityInput = (form) => {
    const optionsAr = ['Low', 'Medium', 'High'];
    const fieldset = createFieldset('Priority');
    setRadioFormElements(fieldset, 'priority-input', optionsAr);
    form.appendChild(fieldset);
};

const addToDoContent = (toDoItem) => {
    const toDoContentDiv = document.createElement('div');
    const dueDateDiv = addAttributes('', 'class', 'due-date-div', 'div');
    const dueDateLabel = addAttributes('Due - ', 'class', 'duedate-label', 'div');
    const formattedDate = formatToDoDate(toDoItem.dueDate);
    const dueDateValue = addAttributes(formattedDate, 'class', 'due-date', 'div');
    const priorityDiv = addAttributes('', 'class', 'priority-div', 'div');
    const priorityLabel = addAttributes('Priority - ', 'class', 'priority-label', 'div');
    const priorityValue = addAttributes(toDoItem.priority, 'class', 'priority', 'div');

    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'p');

    toDoContentDiv.setAttribute('class', 'todo-content');
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateValue);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityValue);
    toDoContentDiv.appendChild(dueDateDiv);
    toDoContentDiv.appendChild(priorityDiv);
    toDoContentDiv.appendChild(descDiv);
    return toDoContentDiv;
    //Add labels for each div (Like 'due: ')
    //To add 'todo expand' feature, hide toDoContentDiv when clicked
};

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = addAttributes('', 'class', 'todo expand-mode', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const toDoContentDiv = addToDoContent(toDoItem);

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(toDoContentDiv);
    addToDoClickEventListener(toDoParent);
};

const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = addAttributes('', 'class', className, elementType);
    parent.insertBefore(element, lowerDiv);
    return element;
};

const addButton = (parent, type, id, className, text) => {
    const button = addAttributes(text, 'id', id, 'button');
    addButtonAttributes(button, type, id, className, text);
    parent.appendChild(button);
    return button;
};

const addFolderClearButton = (parent, activeClass) => {
    const button = addAttributes('X', 'class', 'remove-folder-button ' + activeClass, 'button');
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
    displayToDo,
    hideElements,
    addFolderClearButton,
    addFolderChildElements,
    addToDoPriorityInput
};