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
    if (!storageFilled) {
        addInitialFolder();
    } else if (storageFilled) {
        loadStorage();
    } else {

    }
};

const addInitialFolder = () => {
    const toDoFolder = addToDoFolder(defaultFolderTitle, 'inactive');
    // defaultFolderDiv = ;
    //Problem - addToDoFolder doesn't return folderDiv anymore
    //
};


const addToDoFolder = (folderName, buttonClass) => {
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv, buttonClass);

    activeFolder = setActiveFolder(folderContentDiv, toDoFolder.title, toDoFolder.key);
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder, toDoFolder.key);

    return toDoFolder;
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
    getActiveFolderKey,
    resetActiveFolder
};
