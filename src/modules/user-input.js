import {
    addToDoFolder,
    resetActiveFolder
} from "./to-do-folders";
import { addToDo } from "./to-do";
import { toggleToDoFormVisible } from "./form-dom";
import {
    removeFolderFromStorage,
    storeFolder,
    getPrimaryFolderKey
} from "./storage";


const getInput = (id) => {
    return document.getElementById(id).value;
};

const getRadioInput = (name) => {
    const radios = document.getElementsByName(name);

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
};

/* Sidebar/Folder */

const getSidebarInput = () => {
    const input = getInput('folder-title');
    return input;
};

const manageSidebarInput = () => {
    const input = getSidebarInput();
    const folderKey = getPrimaryFolderKey();
    const folder = addToDoFolder(input, 'active', folderKey);
    storeFolder(folder);
};

const registerSidebarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        manageSidebarInput();
        form.reset();
    });
};

const removeFolder = (folder, sidebarElement) => {
    folder.remove();
    sidebarElement.remove();
};

const registerRemoveFolderListener = (button, folderDiv, sidebarElement, folder) => {
    button.addEventListener('click', () => {
        resetActiveFolder(folderDiv);
        removeFolder(folderDiv, sidebarElement);
        removeFolderFromStorage(folder);

    });
};

/* To Do */

const addToDoInputs = () => {
    const title = getInput('title-input');
    const dueDate = getInput('duedate-input');
    const priority = getRadioInput('priority-input');
    const description = getInput('description-input');

    addToDo(title, dueDate, priority, description);
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleToDoFormVisible(true);
    });
};

const registerToDoFormClearListener = (form, clearButton) => {
    clearButton.addEventListener('click', () => {
        toggleToDoFormVisible(false);
        form.reset();
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDoInputs();
        toggleToDoFormVisible(false);
        form.reset();
    });
};

export {
    registerSidebarSubmitListener,
    registerRemoveFolderListener,
    registerAddToDoListener,
    registerToDoFormClearListener,
    registerToDoSubmitListener,
    getInput,
    getRadioInput,
};