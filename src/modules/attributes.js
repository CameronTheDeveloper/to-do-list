const setSidebarInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
    item.setAttribute('maxLength', '20');
};

const setSidebarFormAttributes = (form, action, method) => {
    form.addAttribute('action', action);
    form.addAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setSidebarInputAttributes(input, 'text', 'form-title', 'form-title');
    setSidebarFormAttributes(form, '', 'post');
};

//
// const setLabelAttributes = (item, attType, , text) => {
//     item.setAttribute(attType, att);
//     item.innerHTML = text;
// };

//For <form>

export { addSidebarFormAttributes };
