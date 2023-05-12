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
    setRadioAttributes

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

const addFormInputElement = (type, parent, id) => { //id is not used
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
};

const addFormRadioInputs = (parent, optionsAr, name) => {
    for (let i = 0; i < optionsAr.length; i++) {
        let radioInput = document.createElement('radio');
        let label = document.createElement('label');

        setRadioAttributes(radioInput, label, name, optionsAr[i]);
        parent.appendChild(radioInput);
    }
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
    const input = addFormInputElement('input', form, 'folder-title');

    addSidebarFormAttributes(form, input);
    registerSidebarSubmitListener(form, input);
    return form;
};

const addFolderChildElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const addToDoForm = (parent) => {
    const priorityAr = ['Low', 'Medium', 'High'];
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form, 'title');
    const priorityLabel = addFormLabelElement(form);
    //const priority = addFormRadioElements(priorityAr);
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form, 'description');
    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');

    addToDoFormAttributes(form, title, priority, description);
    addToDoLabelAttributes(titleLabel, priorityLabel, descLabel);

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
    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'div');

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
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