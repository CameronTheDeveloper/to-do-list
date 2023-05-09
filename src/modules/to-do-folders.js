import '../styles/to-do-folders.css';
import { hideElements } from "./page-layout";
const contentItems = document.querySelector('#content-items');

const addToDoFolder = (folderName) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const folder = document.createElement('div');
    folder.classList.add('todo-folder', folderName);
    contentItems.insertBefore(folder, toDoInputs);
    return folder;
};

const hideInactiveFolders = (activeFolder) => {
    const folders = document.querySelectorAll('.todo-folder');

    hideElements(folders);
    activeFolder.style.display = 'grid';
    contentItems.style.display = 'block';
};

export { addToDoFolder, hideInactiveFolders };
