import { hideElements } from "./page-layout";

const contentItems = document.querySelector('#content-items');

const addToDoFolder = (folderName) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const folder = document.createElement('div');
    folder.classList.add('todo-folder', folderName);
    contentItems.insertBefore(folder, toDoInputs);
    return folder;
};

const hideInactiveFolders = () => {
    const folders = document.querySelectorAll('.folder');
    hideElements(folders);
};

export { addToDoFolder, hideInactiveFolders };
