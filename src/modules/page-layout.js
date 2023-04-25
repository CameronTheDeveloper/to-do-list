import { registerSidebarSubmitListener, registerRemoveListener } from "./user-input";
import { addSidebarFormAttributes } from "./attributes";

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

// //Remember to reorganize this
// const addFormItemElements = (parent, elementType, id) => {
//     const input = document.createElement('input');

//     setFormInputAttributes(input, 'text', id, id);
//     parent.appendChild(input);

// };

const addSidebarInputElement = (parent, id) => {
    const input = document.createElement('input');

    parent.appendChild(input);
    return input;
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

//
const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form');
    const input = addSidebarInputElement(form, 'folder-title');

    addSidebarFormAttributes(form, input);
    registerSidebarSubmitListener(form, input);
    return form;
};

/* This function */
const addAttributes = (text, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.setAttribute(attType, attName);
    return element;
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

const addButton = (parent, text, className, type) => {
    const button = addAttributes(text, 'class', className, 'button');
    addButtonType(button, type);
    parent.appendChild(button);
    return button;
};

const clearHTML = (element) => {
    element.innerHTML = '';
};

const removeHTML = (element) => {
    element.remove();
};

const addRemoveButton = (parent, text, className) => {
    const removeButton = addButton(parent, text, className, 'button');
    registerRemoveListener(removeButton, parent);
    return removeButton;

};

export {
    addContent,
    addButton,
    clearHTML,
    removeHTML,
    addAbove,
    addSidebarForm,
    addRemoveButton
};