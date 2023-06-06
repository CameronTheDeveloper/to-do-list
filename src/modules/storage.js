import { getActiveFolderKey } from "./to-do-folders";
let folderCountKey = 'folderCount';
let toDoCountKey = 'toDoCount';

const getFolderCount = () => {
    return localStorage.getItem(folderCountKey);
};

const getToDoCount = () => {
    return localStorage.getItem(toDoCountKey);
};

const initializeStorageCounts = () => {
    localStorage.setItem(folderCountKey, 0);
    localStorage.setItem(toDoCountKey, 0);
};

//Check if local storage is populated
const checkLocalStorage = () => {
    if (localStorage.length === 0) {
        initializeStorageCounts();
        return false;
    } else {
        return true;
    }
};

/* Folder */

const generateFolderKey = (folderNum, keyWord) => {
    return `folder${folderNum}${keyWord}`;
};

const storeFolder = (title, folder) => {
    let folderNum = getFolderCount();
    const titleKey = generateFolderKey(folderNum, 'title');

    folder.key = `folder${folderNum}`;
    localStorage.setItem(folder.key, folder.key);
    localStorage.setItem(titleKey, title);
    folderNum++;
    localStorage.setItem(folderCountKey, folderNum);
};

const removeFolderFromStorage = (folder) => {
    const key = folder.key;
    const titleKey = `${key}title`;
    localStorage.removeItem(key);
    localStorage.removeItem(titleKey);
};

/* To Do */

const generateToDoKey = (keyWord) => {
    return `todo${toDoCount}${keyWord}`;
};

const storeToDo = (toDoItem) => {
    const titleKey = generateToDoKey('title');
    const dueDateKey = generateToDoKey('duedate');
    const priorityKey = generateToDoKey('priority');
    const descKey = generateToDoKey('desc');
    const toDoFolderKey = generateToDoKey('folder');
    const activeFolderKey = getActiveFolderKey();

    toDoItem.key = `todo${toDoCount}`;// Move this to todo.js when keyCount has getItem()
    toDoItem.folderKey = activeFolderKey;

    localStorage.setItem(toDoItem.key, toDoItem.key);
    localStorage.setItem(titleKey, toDoItem.title);
    localStorage.setItem(dueDateKey, toDoItem.dueDate);
    localStorage.setItem(priorityKey, toDoItem.priority);
    localStorage.setItem(descKey, toDoItem.description);
    localStorage.setItem(toDoFolderKey, activeFolderKey);
    toDoCount++;
};

const removeToDoFromStorage = (toDoItem) => {
    const key = toDoItem.key;
    const titleKey = `${key}title`;
    const dueDateKey = `${key}duedate`;
    const priorityKey = `${key}priority`;
    const descKey = `${key}desc`;
    const folderKey = `${key}folder`;

    localStorage.removeItem(toDoItem.key);
    localStorage.removeItem(titleKey);
    localStorage.removeItem(dueDateKey);
    localStorage.removeItem(priorityKey);
    localStorage.removeItem(descKey);
    localStorage.removeItem(folderKey);
};

export { checkLocalStorage, generateFolderKey, storeFolder, storeToDo, removeFolderFromStorage, removeToDoFromStorage };