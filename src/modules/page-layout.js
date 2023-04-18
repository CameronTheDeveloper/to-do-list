const content = document.querySelector('#content');

const addContent = (parent, item, className) => {
    const div = document.createElement('div');
    div.textContent = item;
    div.classList.add(className);
    parent.appendChild(div);
};

export { addContent };