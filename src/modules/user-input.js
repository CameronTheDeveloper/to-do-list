import {
    addAbove
} from "./page-dom";
import {
    addToDoFolder,
    setActiveFolder,
    resetActiveFolder
} from "./to-do-folders";
import { addToDo } from "./to-do";
import { toggleToDoFormVisible } from "./form-dom";

const sidebarFolders = document.querySelector('#sidebar-folders');

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

//Replace with addFolderElements maybe
const setFolderElements = (parent, folder, removeButton) => {
    //folder.title = folderName;

    registerRemoveFolderListener(removeButton, folder, parent);
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    return input;
};

//Called by submit sidebar
const manageSidebarInput = () => {
    const input = getSidebarInput();
    const folder = addToDoFolder(input, 'active');

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

const registerRemoveFolderListener = (button, folder, sidebarElement) => {
    button.addEventListener('click', () => {
        removeFolder(folder, sidebarElement);
        resetActiveFolder(folder);
    });
};

/* To Do */

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
        addToDo();
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
    setFolderElements,
    getInput,
    getRadioInput,
};