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
    } else if (elementType === 'label') {
        setFormInputAttributes(element, 'label', 'folder-name', 'folder-name');
    } else if (elementType === 'div') {
        //Create div parent - Maybe instead do seperate function
        addAttributes(parent, 'Test',);
        parent.appendChild(element);
    }
    //Problem: This is being used for form Parent

    return element;
};

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

//Need to use for form label and form input
const setFormInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
};

const addSideBarForm = (parent) => {
    const formParent = addFormParent(parent, 'sidebar-add-form');
    const form = addFormElements(formParent, '', 'sidebar-add-form', 'form');
    //setFormAttributes(formParent, form);
    addFormElements(form, 'id', 'sidebar-form-title', 'label'); //Text content
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