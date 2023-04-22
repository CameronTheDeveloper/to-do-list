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

const addFormItemElements = (parent, elementType, id) => {
    if (elementType === 'label') {
        const input = document.createElement('input');

        setFormInputAttributes(input, 'text', id, id);
        parent.appendChild(input);
    }
};

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

const setFormInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
};

const setLabelAttributes = (item, forAtt, text) => {
    item.setAttribute('for', forAtt);
    item.innerHTML = text;
};

const addSideBarForm = (parent) => {
    const formParent = addFormParent(parent, 'sidebar-add-form');
    const form = addForm(formParent);
    addFormItemElements(form, 'label', 'folder-title'); //Text content
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