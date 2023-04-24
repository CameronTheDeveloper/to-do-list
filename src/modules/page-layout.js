import { registerSidebarSubmitListener } from "./user-input";
import { setSidebarInputAttributes } from "./attributes";

const content = document.querySelector('#content');

const addContent = (parent, item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
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
    setSidebarInputAttributes(input, 'text', id, id);  //attribute function
    parent.appendChild(input);
};

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

//
const addSidebarForm = (parent) => {
    const formParent = addFormParent(parent, 'sidebar-add-form');
    const form = addForm(formParent);
    addSidebarInputElement(form, 'folder-title'); //Text content
    //setSidebarFormAttributes();
    registerSidebarSubmitListener(form);
    return form;
};

/* This function */
const addAttributes = (item, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.setAttribute(attType, attName);
    return element;
};

const addButtonType = (button, type) => {
    button.setAttribute('type', type);
};

const appendAbove = (parent, lowerDiv, item) => {
    parent.insertBefore(item, lowerDiv);
};

const addAbove = (item, className, elementType, parent, lowerDiv) => {
    const element = addAttributes(item, 'class', className, elementType);
    appendAbove(parent, lowerDiv, element);
};

const addButton = (parent, item, className, type) => {
    const button = addAttributes(item, 'class', className, 'button');
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

export {
    addContent,
    addButton,
    clearHTML,
    removeHTML,
    addAbove,
    addSidebarForm
};