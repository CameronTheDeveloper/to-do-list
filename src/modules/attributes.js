const setSidebarInputAttributes = (item, type, id, name) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', name);
    item.setAttribute('maxLength', '20');
};

/* Have function to */
// const setLabelAttributes = (item, attType, , text) => {
//     item.setAttribute(attType, att);
//     item.innerHTML = text;
// };

//For <form>

export { setSidebarInputAttributes };
