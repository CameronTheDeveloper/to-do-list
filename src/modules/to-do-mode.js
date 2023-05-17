import '../styles/to-do-mode.css';

const clearButton = document.querySelector('#todo-clear-mode-button');
let clearMode = false;

const addClearEventListener = (element) => {
    element.addEventListener('click', () => {
        if (clearMode) {
            element.remove();
        } else {
            //Expand to do
        }
    });
};

const toggleClearModeButtonStyle = (clearMode) => {
    if (clearMode) {
        clearButton.className = 'active';

    } else {
        clearButton.className = 'inactive';
    }
};

const toggleToDoBorderStyle = (clearMode) => {
    const toDos = document.querySelectorAll('.todo');
    if (clearMode) {
        toDos.forEach((toDo) => {
            toDo.style.borderColor = '#ff5757';
            toDo.style.backgroundColor = 'rgb(255 197 197)';
            toDo.style.borderWidth = '2px';
            toDo.style.boxShadow = '0 0 10px 5px rgb(136 44 44)';
        });
    } else {
        toDos.forEach((toDo) => {
            toDo.style.borderColor = 'black';
            toDo.style.backgroundColor = 'white';
            toDo.style.borderWidth = '1px';
            toDo.style.boxShadow = '';
        });
    }
};

const toggleToDoInputsDisplay = (clearMode) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    if (clearMode) {
        toDoInputs.style.display = 'none';
    } else {
        toDoInputs.style.display = 'grid';
    }
};

clearButton.addEventListener('click', () => {
    if (!clearMode) {
        clearMode = true;
        toggleClearModeButtonStyle(clearMode);
        toggleToDoBorderStyle(clearMode);
        toggleToDoInputsDisplay(clearMode);
    } else {
        clearMode = false;
        toggleClearModeButtonStyle(clearMode);
        toggleToDoBorderStyle(clearMode);
        toggleToDoInputsDisplay(clearMode);
    }
});

export { addClearEventListener };