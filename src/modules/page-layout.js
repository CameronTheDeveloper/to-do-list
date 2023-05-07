import {
    registerSidebarSubmitListener,
    registerRemoveListener,
    registerToDoSubmitListener
} from "./user-input";

import {
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addAttributes,
    addToDoLabelAttributes
} from "./attributes";
import { addClearEventListener } from "./clear-mode";

const content = document.querySelector('#content');

const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addForm = (parent) => {
    const element = document.createElement('form');
    parent.appendChild(element);
    return element;
};

const addFormInputElement = (type, parent, id) => {
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
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
    const form = addForm(formParent);
    return form;
};


const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form');
    const input = addFormInputElement('input', form, 'folder-title');

    addSidebarFormAttributes(form, input);
    registerSidebarSubmitListener(form, input);
    return form;
};

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form, 'title');
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form, 'description');


    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');
    addToDoFormAttributes(form, title, description);
    addToDoLabelAttributes(titleLabel, descLabel);

    registerToDoSubmitListener(form);
};

const displayToDo = (toDoItem, folder) => {
    const toDoParent = addAttributes('', 'class', 'todo', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

    folder.appendChild(toDoParent);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(descDiv);

    addClearEventListener(toDoParent);
};

const addButtonType = (button, type) => {
    button.setAttribute('type', type);
};

const appendAbove = (parent, lowerDiv, item) => {
    parent.insertBefore(item, lowerDiv);
};

//addAttributes needs changes
const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = addAttributes('', 'class', className, elementType);
    appendAbove(parent, lowerDiv, element);
    return element;
};

const addButton = (parent, text, id, type) => {
    const button = addAttributes(text, 'id', id, 'button');
    addButtonType(button, type);
    parent.appendChild(button);
    return button;
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

const clearHTML = (element) => {
    element.innerHTML = '';
};

const removeHTML = (element) => {
    element.remove();
};

export {
    addContent,
    addButton,
    clearHTML,
    removeHTML,
    addAbove,
    addSidebarForm,
    addToDoForm,
    displayToDo,
    toggleToDoFormVisible
};