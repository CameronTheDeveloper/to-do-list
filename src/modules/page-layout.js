const content = document.querySelector('#content');

const addContent = (parent, item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFormElements = (parent, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    if (elementType === 'form') {
        parent.appendChild(element);
        return element;
    }
    if (elementType === 'label') {

    }
    setFormInputAttributes(element, 'label', 'folder-name', 'folder-name');

    // //element.setAttribute('id', className);
    // element.setAttribute(attType, attName);
    // parent.appendChild(element);        //Parent is formParent

    return element;
};

//Need to use for form label and form input
const setFormInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
};

const addSideBarForm = (parent) => {
    const formParent = addFormElements(parent, 'id', 'sidebar-add-form', 'div');
    const form = addFormElements(formParent, '', 'sidebar-add-form', 'form');
    //setFormAttributes(formParent, form);
    addFormElements(form, 'id', 'sidebar-form-title', 'div'); //Text content
};

const addAttributes = (item, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.setAttribute(attType, attName);
    return element;
};

const appendAbove = (parent, lowerDiv, item) => {
    parent.insertBefore(item, lowerDiv);
};

const addAbove = (item, className, elementType, parent, lowerDiv) => {
    const element = addAttributes(item, 'class', className, elementType);
    appendAbove(parent, lowerDiv, element);
};

const addButton = (parent, item, className) => {
    const button = addAttributes(item, 'class', className, 'button');
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
    addSideBarForm
};