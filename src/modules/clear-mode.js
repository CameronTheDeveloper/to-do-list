import { removeHTML } from "./page-layout";

const clearButton = document.querySelector('#todo-clear-mode-button');
let clearMode = false;

clearButton.addEventListener('click', () => {
    if (!clearMode) {
        clearMode = true;
    } else {
        clearMode = false;
    }
});

//Call on each to do created
const addClearEventListener = (element) => {
    element.addEventListener('click', () => {
        if (clearMode) {
            removeHTML(element);
        } else {
            //Expand to do
        }
    });

};

// toDos.forEach(todo => {

// });


// todo.addeventlistener click;
// if clearmode == true{
//     todo.removeHTML();
// }

export { addClearEventListener };