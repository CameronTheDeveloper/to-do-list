const content = document.querySelector('#content');

const addContent = (parent, item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.classList.add(className);
    parent.appendChild(element);
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
    const button = document.createElement('button');
    button.textContent = item;
    button.classList.add(className);
    parent.appendChild(button);
    return button;
};

const clearHTML = (element) => {
    element.innerHTML = '';
};

const removeHTML = (element) => {
    element.remove();
};

export { addContent, addButton, clearHTML, removeHTML, addAbove };