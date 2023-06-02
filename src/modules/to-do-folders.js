import '../styles/to-do-folders.css';
import { addFolderSidebarElements, hideElements } from "./page-dom";
import { setSidebarInput } from './user-input';
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
    const sidebarFolder = setSidebarInput(defaultFolderName, toDoFolder, 'inactive');
    defaultFolder = toDoFolder;
    defaultSidebarFolder = sidebarFolder;
    defaultSidebarFolder.setAttribute('id', 'default-todo-folder');
    activeFolder = setActiveFolder(sidebarFolder, toDoFolder);
};

// const addToDoFolder = (folderName) => {
//     const toDoFolder = document.createElement('div');
//     const folderClass = folderName.replace(/\s/g, '-');
//     toDoFolder.classList.add('todo-folder', folderClass);
//     contentItems.appendChild(toDoFolder);
//     return toDoFolder;
// };

//In this function, call folder DOM functions
//Right now it returns 
const addToDoFolder = (folderName) => {
    const key = generateFolderKey();
    const toDoFolder = folder(folderName, false, key);
    const folderClass = folderName.replace(/\s/g, '-');
    const sidebarFolder = addFolderSidebarElements(toDoFolder, folderClass);

    storeFolder(toDoFolder);
    //Need to return folder div
};

const setActiveFolder = (sidebarFolder, toDoFolder) => {
    changeActiveFolder(toDoFolder);
    hideInactiveFolders(toDoFolder);
    toDoFolder.appendChild(toDoInputs);
    changeFolderHeading(sidebarFolder);
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

const changeFolderHeading = (sidebarFolder) => {
    const folderHeading = document.querySelector('#active-folder-heading');
    const title = sidebarFolder.querySelector('.sidebar-folder-title');
    folderHeading.innerHTML = title.innerHTML;
};

export {
    initToDoFolder,
    addToDoFolder,
    setActiveFolder,
    getActiveFolder,
    resetActiveFolder
};
