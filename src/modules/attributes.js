const addAttributes = (text, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.setAttribute(attType, attName);
    return element;
};

const setTextInputAttributes = (item, type, id, name, maxLength) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
    item.setAttribute('maxLength', maxLength);
    item.required = true;
};

const setFormElementAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setTextInputAttributes(input, 'text', 'folder-title', 'form-title', '20');
    setFormElementAttributes(form, '', 'post');
};

const addToDoFormAttributes = (form, title) => {
    setFormElementAttributes(form, '', 'post');
    setTextInputAttributes(title, 'text', 'todo-title', 'todo-title', '10');
};
//
// const setLabelAttributes = (item, attType, , text) => {
//     item.setAttribute(attType, att);
//     item.innerHTML = text;
// };

//For <form>

export { addSidebarFormAttributes, addToDoFormAttributes, addAttributes };
