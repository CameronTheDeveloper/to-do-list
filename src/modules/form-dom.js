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

const addFormParent = (parent, id, className) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    element.setAttribute('class', className);
    parent.appendChild(element);
    return element;
};

const addFormElement = (parent) => {
    const element = document.createElement('form');
    parent.appendChild(element);
    return element;
};

const addFormToDOM = (parent, id, className) => {
    const formParent = addFormParent(parent, id, className);
    const form = addFormElement(formParent);
    return form;
};

const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form', 'active');
    const input = addFormInputElement('input', form);

    addSidebarFormAttributes(form, input);
    registerSidebarSubmitListener(form, input);
    return form;
};

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form', 'inactive');
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

const toggleToDoFormVisible = () => {
    const toDoForm = document.querySelector('#todo-add-form');
    const checkedRadio = document.querySelector('#low-radio');

    if (toDoForm.className === 'inactive') {
        checkedRadio.checked = true;
        toDoForm.className = 'active';
    } else {
        toDoForm.className = 'inactive';
    }
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
    toggleToDoFormVisible,
    addFormDateElements,
    addFormRadioElements
};