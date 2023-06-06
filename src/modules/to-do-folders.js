import '../styles/to-do-folders.css';
import {
    addFolderContentElements,
    addFolderSidebarElements,
    hideElements
} from "./page-dom";
import { toggleToDoFormVisible } from './form-dom';
import { checkLocalStorage, storeFolder } from './storage';

const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
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

    } else {

    }
};

const addInitialFolder = () => {
    const toDoFolder = addToDoFolder(defaultFolderTitle, 'inactive');
    defaultFolder = toDoFolder;
    activeFolder = setActiveFolder(toDoFolder, defaultFolderTitle, 'folder0');
};


const addToDoFolder = (folderName, buttonClass) => {
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName, false);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv, buttonClass);
    storeFolder(toDoFolder.title, toDoFolder);   //Move this to a function that is only called if storage is empty
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder, toDoFolder.key);

    return folderContentDiv;
};

const setActiveFolderOnClick = (sidebarFolderDiv, contentFolderDiv, folder, key) => {
    const title = sidebarFolderDiv.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = setActiveFolder(contentFolderDiv, folder.title, key);
    });
};

const setActiveFolder = (toDoFolderDiv, folderTitle, key) => {
    changeActiveFolder(toDoFolderDiv);
    hideInactiveFolders(toDoFolderDiv);
    toDoFolderDiv.appendChild(toDoInputs);
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
    return activeFolderKey;
};

const resetActiveFolder = (toDoFolder) => {
    if (toDoFolder === activeFolder) {
        activeFolder = setActiveFolder(defaultFolder, defaultFolderTitle);
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
    setActiveFolder,
    getActiveFolder,
    getActiveFolderKey,
    resetActiveFolder
};
