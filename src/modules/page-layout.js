import { addClearEventListener } from "./to-do-mode";
import { addAttributes } from "./attributes";
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
    const checkedRadio = document.querySelector('#low-radio');

    if (toDoForm.style.display === 'none') {
        checkedRadio.checked = true;
        toDoForm.style.display = 'grid';
    } else if (toDoForm.style.display === 'grid') {
        toDoForm.style.display = 'none';
    } else {
        checkedRadio.checked = true;
        toDoForm.style.display = 'grid';
    }
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

    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

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