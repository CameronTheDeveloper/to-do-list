import {
    addAbove,
    addButton,
    addFolderClearButton,
    addFolderChildElements
} from "./page-layout";
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

/* Sidebar */

const setFolderElements = (parent, input, folder, buttonClass) => {
    const title = document.createElement('div');
    const removeButton = addFolderClearButton(parent, buttonClass);
    title.innerHTML = input;
    addFolderChildElements(parent, title, removeButton);
    registerRemoveFolderListener(removeButton, folder, parent);
    title.setAttribute('class', 'sidebar-folder-title');
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

const removeFolderContentItems = () => {
    const folderHeader = document.querySelector('#active-folder-heading');
    folderHeader.innerHTML = '';
};

const registerRemoveFolderListener = (button, folder, sidebarElement) => {
    button.addEventListener('click', () => {
        removeFolderContentItems();
        removeFolder(folder, sidebarElement);
        resetActiveFolder();
    });
};

/* To Do */

const toggleAddToDoButtonDisplay = () => {
    const button = document.querySelector('#todo-add-button');
    if (button.className === 'active') {
        button.className = 'inactive';
    } else {
        button.className = 'active';
    }
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
    });
};

const registerToDoFormClearListener = (form, clearButton) => {
    clearButton.addEventListener('click', () => {
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
        form.reset();
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
        form.reset();
    });
};

export {
    registerSidebarSubmitListener,
    registerAddToDoListener,
    registerToDoFormClearListener,
    registerToDoSubmitListener,
    setSidebarInput,
    getInput,
    getRadioInput
};