const setSidebarInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
    item.setAttribute('maxLength', '20');
    item.required = true;
};

const setSidebarFormAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setSidebarInputAttributes(input, 'text', 'folder-title', 'form-title');
    setSidebarFormAttributes(form, '', 'post');
};

//
// const setLabelAttributes = (item, attType, , text) => {
//     item.setAttribute(attType, att);
//     item.innerHTML = text;
// };

//For <form>

export { addSidebarFormAttributes };
