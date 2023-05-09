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
        clearButton.style.fontSize = '1.1rem';
        clearButton.style.color = 'red';

    } else {
        clearButton.style.boxShadow = '';
        clearButton.style.fontWeight = '500';
        clearButton.style.fontSize = '1rem';
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