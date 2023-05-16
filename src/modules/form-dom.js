import {
    registerSidebarSubmitListener,
    registerToDoSubmitListener
} from "./user-input";
import {
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addToDoLabelAttributes,
    setRadioAttributes,
    setDateInputAttributes,
} from "./attributes";
import {
    setToDoDueDateInput,
    setToDoPriorityInput,
    addButton
} from "./page-layout";

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

const addFormElement = (parent) => {
    const element = document.createElement('form');
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

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form);
    setToDoDueDateInput(form);
    setToDoPriorityInput(form);
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form);
    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');

    addToDoFormAttributes(form, title, description);
    addToDoLabelAttributes(titleLabel, descLabel);

    registerToDoSubmitListener(form);
};

const addFormInputElement = (type, parent) => {
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
};

const addFormDateElements = (parent, min, max, value, id, name) => {
    const dateInput = addFormInputElement('input', parent);
    setDateInputAttributes(dateInput, min, max, value, id, name);
};

const addFormRadioElements = (parent, name, option) => {
    const radioInput = document.createElement('input');
    const label = document.createElement('label');

    setRadioAttributes(radioInput, label, name, option);
    parent.appendChild(radioInput);
    parent.appendChild(label);
};

const addFormLabelElement = (parent) => {
    const label = document.createElement('label');
    parent.appendChild(label);
    return label;
};

export {
    addSidebarForm,
    addToDoForm,
    addFormDateElements,
    addFormRadioElements
};