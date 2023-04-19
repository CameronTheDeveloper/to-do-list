const content = document.querySelector('#content');

const addContent = (parent, item, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = item;
    element.classList.add(className);
    parent.appendChild(element);
};

const addButton = (parent, item, className) => {
    const button = document.createElement('button');
    button.textContent = item;
    button.classList.add(className);
    parent.appendChild(button);
    return button;
};

const removeHTML = (element) => {
    element.innerHTML = '';
};

export { addContent, addButton };