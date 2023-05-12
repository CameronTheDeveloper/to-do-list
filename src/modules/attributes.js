const addAttributes = (text, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.setAttribute(attType, attName);
    return element;
};

const setTextInputAttributes = (item, type, id, maxLength) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('maxLength', maxLength);
    item.required = true;
};

const setTextAreaAttributes = (item, id, cols, rows) => {
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('rows', rows);
    item.setAttribute('cols', cols);
};

const setFormElementAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setTextInputAttributes(input, 'text', 'folder-title', '15');
    setFormElementAttributes(form, '', 'post');
};

const addToDoFormAttributes = (form, title, priority, desc) => {
    setFormElementAttributes(form, '', 'post');
    setTextInputAttributes(title, 'text', 'title-input', '10');
    setTextAreaAttributes(desc, 'description-input', '26', '5');
};

const addToDoLabelAttributes = (title, priority, desc) => {
    setLabelAttributes(title, 'for', 'title-input', 'Title: ');
    setLabelAttributes(priority, 'for', 'priority-input', 'Priority:');
    setLabelAttributes(desc, 'for', 'description-input', 'Description');
};

const setLabelAttributes = (item, attType, att, text) => {
    item.setAttribute(attType, att);
    item.setAttribute('class', 'form-label');
    item.innerHTML = text;
};


export {
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addAttributes,
    addToDoLabelAttributes,
};
