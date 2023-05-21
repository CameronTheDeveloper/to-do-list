import '../styles/to-do-folders.css';
import { hideElements } from "./page-layout";
import { setSidebarInput } from './user-input';
import { toggleToDoFormVisible } from './form-dom';

const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
let defaultFolder = null;       //Create getDefaultFolder function
let defaultFolderName = 'General';
let defaultSidebarFolder = null;
let activeFolder = null;

const initToDoFolder = () => {
    const folder = addToDoFolder(defaultFolderName);
    const sidebarFolder = setSidebarInput(defaultFolderName, folder, 'inactive');
    defaultFolder = folder;
    defaultSidebarFolder = sidebarFolder;
    activeFolder = setActiveFolder(sidebarFolder, folder);
};

const addToDoFolder = (folderName) => {
    const folder = document.createElement('div');
    const folderClass = folderName.replace(/\s/g, '-');
    folder.classList.add('todo-folder', folderClass);
    contentItems.appendChild(folder);
    return folder;
};

const setActiveFolder = (sidebarFolder, folder) => {
    changeActiveFolder(folder);
    hideInactiveFolders(folder);
    folder.appendChild(toDoInputs);
    changeFolderHeading(sidebarFolder);
    toggleToDoFormVisible(false);
    return activeFolder;
};

const changeActiveFolder = (folder) => {
    activeFolder = folder;
};

const getActiveFolder = () => {
    return activeFolder;
};

const resetActiveFolder = () => {
    activeFolder = setActiveFolder(defaultSidebarFolder, defaultFolder);
};

const hideInactiveFolders = (activeFolder) => {
    const folders = document.querySelectorAll('.todo-folder');
    hideElements(folders);
    activeFolder.style.display = 'grid';
    contentItems.style.display = 'block';       //Possible remove
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
