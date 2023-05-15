import {
    registerSidebarSubmitListener,
    registerToDoSubmitListener
} from "./user-input";

import { addClearEventListener } from "./clear-mode";

import {
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addAttributes,
    addToDoLabelAttributes,
    setRadioAttributes,
    setDateInputAttributes

} from "./attributes";

const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFormElement = (parent) => {
    const element = document.createElement('form');
    parent.appendChild(element);
    return element;
};

const addFormInputElement = (type, parent) => {
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
};

const addFormDateElements = (parent) => {
    const dateInput = addFormInputElement('input', parent);
    setDateInputAttributes(dateInput);
};

const addToDoDueDateInput = (form) => {
    addFormDateElements(form);
};

const addFormRadioElements = (parent, name, option) => {
    const radioInput = document.createElement('input');
    const label = document.createElement('label');

    setRadioAttributes(radioInput, label, name, option);
    parent.appendChild(radioInput);
    parent.appendChild(label);
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

//Retitle
const addToDoPriorityInput = (form) => {
    const optionsAr = ['Low', 'Medium', 'High'];
    const fieldset = createFieldset('Priority: ');
    setRadioFormElements(fieldset, 'priority-input', optionsAr);
    form.appendChild(fieldset);
};



const addFormLabelElement = (parent) => {
    const label = document.createElement('label');
    parent.appendChild(label);
    return label;
};

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

const addFormToDOM = (parent, id) => {
    const formParent = addFormParent(parent, id);
    const form = addFormElement(formParent);
    return form;
};

const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form');
    const input = addFormInputElement('input', form);

    addSidebarFormAttributes(form, input);
    registerSidebarSubmitListener(form, input);
    return form;
};

const addFolderChildElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form);
    addToDoDueDateInput(form);
    addToDoPriorityInput(form);
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form);
    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');

    addToDoFormAttributes(form, title, description);
    addToDoLabelAttributes(titleLabel, descLabel);

    registerToDoSubmitListener(form);
};

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

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = addAttributes('', 'class', 'todo', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const dueDateDiv = addAttributes(toDoItem.dueDate, 'class', 'due-date', 'div');
    const priorityDiv = addAttributes(toDoItem.priority, 'class', 'priority', 'div');
    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(dueDateDiv);
    toDoParent.appendChild(priorityDiv);
    toDoParent.appendChild(descDiv);

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
    addSidebarForm,
    addToDoForm,
    toggleToDoFormVisible,
    displayToDo,
    hideElements,
    addFolderChildElements
};