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
let defaultFolderName = 'General';
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
    const toDoFolder = addToDoFolder(defaultFolderName);
    defaultFolder = toDoFolder;
    // defaultSidebarFolder = sidebarFolder;
    // defaultSidebarFolder.setAttribute('id', 'default-todo-folder');
    // activeFolder = setActiveFolder(sidebarFolder, toDoFolder);
};


//Called by manageSidebarInput (user-input.js) 
const addToDoFolder = (folderName) => {
    const key = generateFolderKey();
    const folderClass = folderName.replace(/\s/g, '-');
    const toDoFolder = folder(folderName, false, key);
    const folderContentDiv = addFolderContentElements(contentItems, folderClass);
    const sidebarFolderDiv = addFolderSidebarElements(toDoFolder, folderContentDiv);
    setActiveFolderOnClick(sidebarFolderDiv, folderContentDiv, toDoFolder);
    storeFolder(key, toDoFolder);   //Move this to a function that is only called if storage is empty

    return folderContentDiv;
};

const setActiveFolderOnClick = (sidebarFolderDiv, contentFolderDiv, folder) => {
    const title = sidebarFolderDiv.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = setActiveFolder(contentFolderDiv, folder);
    });
};

const setActiveFolder = (toDoFolderDiv, toDoFolder) => {
    changeActiveFolder(toDoFolder); //Change
    hideInactiveFolders(toDoFolder);
    toDoFolderDiv.appendChild(toDoInputs);
    changeFolderHeading(toDoFolder.title);
    toggleToDoFormVisible(false);
    return activeFolder;
};

const changeActiveFolder = (toDoFolder) => {
    activeFolder = toDoFolder;
};

const getActiveFolder = () => {
    return activeFolder;
};

const resetActiveFolder = (toDoFolder) => {
    if (toDoFolder === activeFolder) {
        activeFolder = setActiveFolder(defaultSidebarFolder, defaultFolder);
    }
};

const hideInactiveFolders = (activeFolder) => {
    const folders = document.querySelectorAll('.todo-folder');
    hideElements(folders);
    activeFolder.style.display = 'grid';
};

const changeFolderHeading = (folderTitle) => {
    // const folderHeading = document.querySelector('#active-folder-heading');
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
