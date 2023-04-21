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
        console.log('form');
        element.setAttribute('id', className);
        parent.appendChild(element);
        return element;
    }
    element.classList.add(className);
    parent.appendChild(element);        //Parent is formParent
};

const addSideBarForm = (parent) => {
    const form = addFormElements(parent, 'sidebar-add-form', 'form');
    addFormElements(form, 'sidebar-form-item', 'div'); //Text content
};

const addAttributes = (item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.classList.add(className);
    return element;
};

const appendAbove = (parent, lowerDiv, item) => {
    parent.insertBefore(item, lowerDiv);
};

const addAbove = (item, className, elementType, parent, lowerDiv) => {
    const element = addAttributes(item, className, elementType);
    appendAbove(parent, lowerDiv, element);
};

const addButton = (parent, item, className) => {
    const button = addAttributes(item, className, 'button');
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