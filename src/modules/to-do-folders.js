import '../styles/to-do-folders.css';
import {
    addFolderContentElements,
    addFolderSidebarElements,
    hideElements
} from "./page-dom";
import { toggleToDoFormVisible } from './form-dom';
import {
    checkLocalStorage,
    loadStorage,
    getDefaultFolderKey,
    storeFolder
} from './storage';

const contentItems = document.querySelector('#content-items');
let defaultFolder = null;
let defaultFolderTitle = 'General';
let activeFolder = null;
let activeFolderKey = null;

const folder = (title, active, key) => {
    return {
        title: title,
        active: active,
        key: key,
    };
};

const initToDoFolders = () => {
    const storageFilled = checkLocalStorage();
    if (!storageFilled) {
        addInitialFolder();
    } else if (storageFilled) {
        loadStorage();
    } else {

    }
};

const addInitialFolder = () => {
    const toDoFolderDiv = addToDoFolder(defaultFolderTitle, 'inactive');
    defaultFolder = toDoFolderDiv;
};


const addToDoFolder = (folderName, buttonClass) => {
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName, false);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv, buttonClass);

    storeFolder(toDoFolder.title, toDoFolder);   //Move this to a function that is only called if storage is empty
    activeFolder = setActiveFolder(folderContentDiv, toDoFolder.title, toDoFolder.key);
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder, toDoFolder.key);

    return folderContentDiv;
};

const setActiveFolderOnClick = (sidebarFolderDiv, contentFolderDiv, folder, key) => {
    const title = sidebarFolderDiv.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        activeFolder = setActiveFolder(contentFolderDiv, folder.title, key);
    });
};

const setActiveFolder = (toDoFolderDiv, folderTitle, key) => {
    changeActiveFolder(toDoFolderDiv);
    hideInactiveFolders(toDoFolderDiv);
    changeToDoInputsFolder(toDoFolderDiv);
    changeFolderHeading(folderTitle);
    toggleToDoFormVisible(false);
    setActiveFolderKey(key);
    return activeFolder;
};

const changeActiveFolder = (toDoFolderDiv) => {
    activeFolder = toDoFolderDiv;
};

const getActiveFolder = () => {
    return activeFolder;
};

const setActiveFolderKey = (key) => {
    activeFolderKey = key;
};

const getActiveFolderKey = () => {
    //Might need to refactor to getActiveFolderValue for key
    return activeFolderKey;
};

const changeToDoInputsFolder = (toDoFolderDiv) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    toDoFolderDiv.appendChild(toDoInputs);
};

const resetActiveFolder = (toDoFolder) => {
    if (toDoFolder === activeFolder) {
        const key = getDefaultFolderKey();
        activeFolder = setActiveFolder(defaultFolder, defaultFolderTitle, key);
    }
};

const hideInactiveFolders = (activeFolderDiv) => {
    const folders = document.querySelectorAll('.todo-folder');
    hideElements(folders);
    activeFolderDiv.style.display = 'grid';
};

const changeFolderHeading = (folderTitle) => {
    const folderHeading = document.querySelector('#active-folder-heading');
    folderHeading.innerHTML = folderTitle;
};

export {
    initToDoFolders,
    addToDoFolder,
    getActiveFolder,
    getActiveFolderKey,
    resetActiveFolder
};
