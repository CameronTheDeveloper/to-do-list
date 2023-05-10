import '../styles/to-do-folders.css';
import { hideElements } from "./page-layout";
const contentItems = document.querySelector('#content-items');

const addToDoFolder = (folderName) => {
    const folder = document.createElement('div');
    const folderClass = folderName.replace(/\s/g, '-');
    folder.classList.add('todo-folder', folderClass);
    contentItems.appendChild(folder);
    return folder;
};

const hideInactiveFolders = (activeFolder) => {
    const folders = document.querySelectorAll('.todo-folder');
    hideElements(folders);
    activeFolder.style.display = 'grid';
    contentItems.style.display = 'block';
};

export { addToDoFolder, hideInactiveFolders };
