import '../styles/to-do-folders.css';
import { hideElements } from "./page-layout";
import { setSidebarInput } from './user-input';

const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
let activeFolder = null;

const initToDoFolder = () => {
    const folderName = 'Projects';
    const folder = addToDoFolder(folderName);
    const sidebarFolder = setSidebarInput(folderName, folder);
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
    activeFolder = folder;
    hideInactiveFolders(folder);
    folder.appendChild(toDoInputs);
    changeFolderHeading(sidebarFolder);
    return activeFolder;
};

const getActiveFolder = () => {
    return activeFolder;
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
    debugger;
    folderHeading.innerHTML = title.innerHTML;
};

export { initToDoFolder, addToDoFolder, setActiveFolder, getActiveFolder };
