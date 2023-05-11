import {
    addAbove,
    addButton,
    toggleToDoFormVisible,
    displayToDo,
    addFolderChildElements
} from "./page-layout";

import {
    toDo
} from "./to-do";

import {
    addToDoFolder,
    setActiveFolder,
    getActiveFolder
} from "./to-do-folders";

const sidebarFolders = document.querySelector('#sidebar-folders');
const toDoInputs = document.querySelector('#todo-inputs');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const setActiveFolderOnClick = (sidebarFolder, folder) => {
    const title = sidebarFolder.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = setActiveFolder(sidebarFolder, folder);
    });
};

/* Sidebar */

const setFolderElements = (parent, input, folder) => {
    const title = document.createElement('div');
    const removeButton = addButton(parent, 'X', 'remove-folder-button', 'button');
    title.innerHTML = input;
    addFolderChildElements(parent, title, removeButton);
    registerRemoveFolderListener(removeButton, folder, parent);
    title.setAttribute('class', 'sidebar-folder-title');
};


const setSidebarInput = (input, folder) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = addAbove('sidebar-folder', 'div', sidebarFolders, sidebarForm);
    setFolderElements(item, input, folder);
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

    const sidebarFolder = setSidebarInput(input, folder);
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        manageSidebarInput();
        resetForm(form);
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
    });
};

/* To Do */

const toggleAddToDoButtonDisplay = () => {
    const button = document.querySelector('#todo-add-button');
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};

const addToDo = () => {
    const title = getInput('title-input');
    const description = getInput('description-input');
    const toDoItem = toDo(title, description);
    const folder = getActiveFolder();
    displayToDo(toDoItem, folder);
};

const resetForm = (form) => {
    form.reset();
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
        toggleAddToDoButtonDisplay();
        toggleToDoFormVisible();
        resetForm(form);
    });
};

export {
    registerSidebarSubmitListener,
    registerAddToDoListener,
    registerToDoSubmitListener,
    setSidebarInput
};