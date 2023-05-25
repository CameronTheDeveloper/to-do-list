const addAttributes = (text, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.setAttribute(attType, attName);
    return element;
};

const addButtonAttributes = (button, type, id, className, text) => {
    button.setAttribute('type', type);
    button.setAttribute('id', id);
    button.setAttribute('class', className);
    button.textContent = text;
};

const setTextInputAttributes = (item, type, id, maxLength) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('maxLength', maxLength);
    item.required = true;
};

const setTextAreaAttributes = (item, id, cols, rows, maxLength) => {
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('rows', rows);
    item.setAttribute('cols', cols);
    item.setAttribute('maxlength', maxLength);
};

const setRadioAttributes = (element, label, name, value) => {
    const id = value.toLowerCase().replace(/\s/g, '-') + '-radio';
    element.setAttribute('type', 'radio');
    element.setAttribute('id', id);
    element.setAttribute('name', name);
    element.setAttribute('value', value);
    label.setAttribute('for', id);
    label.innerHTML = value;
};

const setDateInputAttributes = (element, min, max, value, id, name) => {
    element.setAttribute('type', 'date');
    element.setAttribute('min', min);
    element.setAttribute('max', max);
    element.setAttribute('value', value);
    element.setAttribute('id', id);
    element.setAttribute('name', name);
};

const setFormElementAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setTextInputAttributes(input, 'text', 'folder-title', '25');
    setFormElementAttributes(form, '', 'post');
};

const addToDoFormAttributes = (form, title, desc) => {
    setFormElementAttributes(form, '', 'post');
    //setTextInputAttributes(title, 'text', 'title-input', '10');
    // setTextAreaAttributes(desc, 'description-input', '26', '5', '150');
};

const addToDoTitleInputAttributes = (titleLabel, title) => {
    setLabelAttributes(titleLabel, 'for', 'title-input', 'Title');
    setTextInputAttributes(title, 'text', 'title-input', '10');
};

const addToDoDescInputAttributes = (descLabel, desc) => {
    setLabelAttributes(descLabel, 'for', 'description-input', 'Description');
    setTextAreaAttributes(desc, 'description-input', '26', '5', '150');
};

const addToDoLabelAttributes = (title, desc) => {
    //setLabelAttributes(title, 'for', 'title-input', 'Title');
    // setLabelAttributes(desc, 'for', 'description-input', 'Description');
};

const setLabelAttributes = (item, attType, att, text) => {
    item.setAttribute(attType, att);
    item.setAttribute('class', 'form-label');
    item.innerHTML = text;
};


export {
    addAttributes,
    addButtonAttributes,
    addSidebarFormAttributes,
    addToDoFormAttributes,
    addToDoLabelAttributes,
    addToDoTitleInputAttributes,
    addToDoDescInputAttributes,
    setRadioAttributes,
    setDateInputAttributes
};
