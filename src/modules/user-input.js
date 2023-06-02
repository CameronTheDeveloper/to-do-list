import {
    addAbove,
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

const setActiveFolderOnClick = (sidebarFolder, folder) => {
    const title = sidebarFolder.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = setActiveFolder(sidebarFolder, folder);
    });
};

/* Sidebar/Folder */

const setFolderElements = (parent, folder, removeButton) => {
    folder.title = getSidebarInput();


    registerRemoveFolderListener(removeButton, folder, parent);
};


const setSidebarInput = (input, folder, buttonClass) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = addAbove('sidebar-folder', 'div', sidebarFolders, sidebarForm);
    setFolderElements(item, input, folder, buttonClass);
    setActiveFolderOnClick(item, folder);
    return item;
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    return input;
};

const manageSidebarInput = () => {
    const input = getSidebarInput();
    const folder = addToDoFolder(input);

    const sidebarFolder = setSidebarInput(input, folder, 'active');
};

const registerSidebarSubmitListener = (form, input) => {
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
    setSidebarInput,
    setFolderElements,
    getInput,
    getRadioInput
};