import {
    registerSidebarSubmitListener,
    registerToDoFormClearListener,
    registerToDoSubmitListener
} from "./user-input";
import {
    addAttributes,
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addToDoLabelAttributes,
    addToDoTitleInputAttributes,
    addToDoDescInputAttributes,
    setRadioAttributes,
    setDateInputAttributes,
} from "./attributes";
import {
    addToDoPriorityInput,
    addButton
} from "./page-layout";
import { addYears } from "date-fns";

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
    const titleDiv = addToDoTitleInput(form);

    addToDoDueDateInput(form);//
    addToDoPriorityInput(form);//
    const descDiv = addToDoDescInput(form);

    addToDoFormDivs(form, titleDiv, descDiv);
    addToDoFormButtons(form);//Check this how the div works

    addToDoFormAttributes(form, title, description);//Refactor for each part of form
    addToDoLabelAttributes(titleLabel, descLabel);//
};

const addToDoTitleInput = (form) => {
    const titleDiv = addAttributes('', 'id', 'todo-title-parent', 'div');
    const titleLabel = addFormLabelElement(titleDiv);
    const title = addFormInputElement('input', titleDiv);

    addToDoTitleInputAttributes(titleLabel, title);
    return titleDiv;
};

const addToDoDueDateInput = (form) => {
    const today = new Date();
    const minDate = format(today, 'yyyy-MM-dd');
    const id = 'duedate-input';
    const name = 'todo-duedate';
    const maxDate = addYears(today, 75);
    const formattedMaxDate = format(maxDate, 'yyyy-MM-dd');
    addFormDateElements(form, minDate, formattedMaxDate, minDate, id, name);
};

const addToDoDescInput = (form) => {
    const descDiv = addAttributes('', 'id', 'todo-desc-parent', 'div');
    const descLabel = addFormLabelElement(descDiv);
    const description = addFormInputElement('textarea', descDiv);

    addToDoDescInputAttributes(descLabel, description);

    return descDiv;
};

const addToDoFormDivs = (form, titleDiv, dateDiv, priorityDiv, descDiv) => {

    form.appendChild(titleDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(descDiv);
};



const addToDoFormButtons = (form) => {
    const formButtonsDiv = addAttributes('', 'id', 'todo-form-buttons-container', 'div');
    const clearButton = addButton(formButtonsDiv, 'button', 'todo-form-clear-button', 'active', 'clear');
    const submitButton = addButton(formButtonsDiv, 'submit', 'todo-submit-button', 'active', 'submit');
    form.appendChild(formButtonsDiv);

    registerToDoFormClearListener(form, clearButton);
    registerToDoSubmitListener(form);
};

const toggleToDoFormVisible = (formActive) => {
    const toDoForm = document.querySelector('#todo-add-form');
    const checkedRadio = document.querySelector('#low-radio');
    const toDoAddButton = document.querySelector('#todo-add-button');

    if (formActive == true) {
        toDoAddButton.className = 'inactive';
        checkedRadio.checked = true;
        toDoForm.className = 'active';
    } else {
        toDoForm.className = 'inactive';
        toDoAddButton.className = 'active';
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