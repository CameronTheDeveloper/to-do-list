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
// Add todo mode class
const toggleToDoBorderStyle = (clearMode) => {
    const toDos = document.querySelectorAll('.todo');
    if (clearMode) {
        toDos.forEach((toDo) => {
            toDo.className = 'todo clear-mode';
        });
    } else {
        toDos.forEach((toDo) => {
            toDo.className = 'todo expand-mode';
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