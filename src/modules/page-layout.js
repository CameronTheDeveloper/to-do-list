const content = document.querySelector('#content');

const addContent = (parent, item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFormElements = (parent, className, elementType) => {
    const element = document.createElement(elementType);

    if (elementType == 'form') {
        parent.appendChild(element);
        return element;
    }
    //element.setAttribute('id', className);
    element.classList.add(className);
    parent.appendChild(element);        //Parent is formParent
};

// const setFormAttributes = (formParent, form) => {
//     formParent.setAttribute('id', element);
// };

const addSideBarForm = (parent) => {
    const formParent = addAttributes(parent, 'id', 'sidebar-add-form', 'div');
    const form = addFormElements(formParent, 'sidebar-add-form', 'form');
    //setFormAttributes(formParent, form);
    addFormElements(form, 'sidebar-form-item', 'div'); //Text content
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