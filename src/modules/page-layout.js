import {
    registerSidebarSubmitListener,
    registerToDoSubmitListener
} from "./user-input";

import {
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addAttributes,
    addToDoLabelAttributes
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
    hideElements
};