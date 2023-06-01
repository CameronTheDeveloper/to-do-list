import '../styles/to-do-folders.css';
import { hideElements } from "./page-layout";
import { setSidebarInput } from './user-input';
import { toggleToDoFormVisible } from './form-dom';

const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
let defaultFolder = null;
let defaultFolderName = 'General';
let defaultSidebarFolder = null;
let activeFolder = null;

function folder(title, key) {
    return {
        title: title,
        key: key,
    };
}

const initToDoFolder = () => {
    const toDoFolder = addToDoFolder(defaultFolderName);
    const sidebarFolder = setSidebarInput(defaultFolderName, toDoFolder, 'inactive');
    defaultFolder = toDoFolder;
    defaultSidebarFolder = sidebarFolder;
    defaultSidebarFolder.setAttribute('id', 'default-todo-folder');
    activeFolder = setActiveFolder(sidebarFolder, toDoFolder);
};

const addToDoFolder = (folderName) => {
    const toDoFolder = document.createElement('div');
    const folderClass = folderName.replace(/\s/g, '-');
    toDoFolder.classList.add('todo-folder', folderClass);
    contentItems.appendChild(toDoFolder);
    return toDoFolder;
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
