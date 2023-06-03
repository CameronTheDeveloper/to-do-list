import '../styles/to-do-folders.css';
import {
    addFolderContentElements,
    addFolderSidebarElements,
    hideElements
} from "./page-dom";
import { toggleToDoFormVisible } from './form-dom';
import { generateFolderKey, storeFolder } from './storage';

const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
let defaultFolder = null;
let defaultFolderTitle = 'General';
let defaultSidebarFolder = null;
let activeFolder = null;
//Need to use the active property for folders

const folder = (title, active, key) => {
    return {
        title: title,
        active: active,
        key: key,
    };
};

const initToDoFolder = () => {
    const toDoFolder = addToDoFolder(defaultFolderTitle, 'inactive');
    defaultFolder = toDoFolder;
    // defaultSidebarFolder = sidebarFolder;
    // defaultSidebarFolder.setAttribute('id', 'default-todo-folder');
    activeFolder = setActiveFolder(toDoFolder, defaultFolderTitle);
};


//Called by manageSidebarInput (user-input.js) 
const addToDoFolder = (folderName, buttonClass) => {
    const key = generateFolderKey();
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName, false, key);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv, buttonClass);
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder);
    storeFolder(key, toDoFolder);   //Move this to a function that is only called if storage is empty

    return folderContentDiv;
};

const setActiveFolderOnClick = (sidebarFolderDiv, contentFolderDiv, folder) => {
    const title = sidebarFolderDiv.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = setActiveFolder(contentFolderDiv, folder.title);
    });
};

const setActiveFolder = (toDoFolderDiv, folderTitle) => {
    changeActiveFolder(toDoFolderDiv);
    hideInactiveFolders(toDoFolderDiv);
    toDoFolderDiv.appendChild(toDoInputs);
    changeFolderHeading(folderTitle);
    toggleToDoFormVisible(false);

    return activeFolder;
};

const changeActiveFolder = (toDoFolderDiv) => {
    activeFolder = toDoFolderDiv;
};

const getActiveFolder = () => {
    return activeFolder;
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
    // const title = sidebarFolder.querySelector('.sidebar-folder-title');
    folderHeading.innerHTML = folderTitle;
};

export {
    initToDoFolder,
    addToDoFolder,
    setActiveFolder,
    getActiveFolder,
    resetActiveFolder
};
