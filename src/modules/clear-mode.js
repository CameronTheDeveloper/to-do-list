const clearButton = document.querySelector('#todo-clear-mode-button');
let clearMode = false;

//Call on each to do created
const addClearEventListener = (element) => {
    element.addEventListener('click', () => {
        if (clearMode) {
            element.remove();
        } else {
            //Expand to do
        }
    });
};

const toggleClearStyle = (clearMode) => {
    if (clearMode) {
        clearButton.style.boxShadow = '0 0 10px red';
        clearButton.style.fontWeight = '900';
        clearButton.style.fontSize = '1.4rem';
        clearButton.style.color = 'red';
        clearButton.style.transition = 'box-shadow 50ms ease-in, ' +
            'font-weight 50ms ease-in, ' +
            'font-size 50ms ease-in, ' +
            'color 50ms ease-in';

    } else {
        clearButton.style.boxShadow = '';
        clearButton.style.fontWeight = '500';
        clearButton.style.fontSize = '1.2rem';
        clearButton.style.color = 'black';
    }
};

clearButton.addEventListener('click', () => {
    if (!clearMode) {
        clearMode = true;
        toggleClearStyle(clearMode);
    } else {
        clearMode = false;
        toggleClearStyle(clearMode);
    }
});

export { addClearEventListener };