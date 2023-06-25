import '../styles/to-do-folders.css';
import {
    addFolderContentElements,
    addFolderSidebarElements,
    hideElements
} from "./page-dom";
import { toggleToDoFormVisible } from './form-dom';
import {
    storeFolder,
    checkLocalStorage,
    loadStorage,
    getDefaultFolderKey
} from './storage';

const contentItems = document.querySelector('#content-items');
let defaultFolderDiv = null;
let defaultFolderTitle = 'General';
let activeFolder = null;
let activeFolderKey = null;

const folder = (title, key) => {
    return {
        title: title,
        key: key,
    };
};

const initToDoFolders = () => {
    const storageFilled = checkLocalStorage();
    const initialFolder = addInitialFolder();
    if (storageFilled) {
        loadStorage();
    } else {
        storeFolder(initialFolder);
    }
};

const addInitialFolder = () => {
    const key = getDefaultFolderKey();
    const toDoFolder = addToDoFolder(defaultFolderTitle, 'inactive', key);
    defaultFolderDiv = document.querySelector('.todo-folder');
    return toDoFolder;
};

const addToDoFolder = (folderName, buttonClass, key) => {
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName, key);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv, buttonClass);
    activeFolder = setActiveFolder(folderContentDiv, toDoFolder.title, toDoFolder.key);
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder);
    return toDoFolder;
};

const setActiveFolderOnClick = (sidebarFolderDiv, contentFolderDiv, folder) => {
    const title = sidebarFolderDiv.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        activeFolder = setActiveFolder(contentFolderDiv, folder.title, folder.key);
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

const getActiveFolderKeyValue = () => {
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
        activeFolder = setActiveFolder(defaultFolderDiv, defaultFolderTitle, key);
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
    getActiveFolderKeyValue,
    resetActiveFolder
};
