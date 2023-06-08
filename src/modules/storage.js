import { getActiveFolderKey } from "date-fns/locale";
import { getActiveFolderKey } from "./to-do-folders";
const folderCountKey = 'folderCount';
const toDoCountKey = 'toDoCount';
const keyPrefix = 'toDoListProject_';

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

const generateToDoKey = (toDoNum, keyWord) => {
    return `todo${toDoNum}${keyWord}`;
};

const storeToDo = (toDoItem) => {
    let toDoNum = getToDoCount();
    const activeFolderKey = getActiveFolderKey();

    toDoItem.key = `todo${toDoNum}`;
    toDoItem.folderKey = activeFolderKey;

    storeToDoTitle(toDoItem, toDoNum);
    storeToDoDueDate(toDoItem, toDoNum);
    storeToDoPriority(toDoItem, toDoNum);
    storeToDoDesc(toDoItem, toDoNum);
    storeToDoFolder(activeFolderKey, toDoNum);
    localStorage.setItem(toDoItem.key, toDoItem.key);

    toDoNum++;
    localStorage.setItem(toDoCountKey, toDoNum);
};

const storeToDoTitle = (toDoItem, toDoNum) => {
    const titleKey = generateToDoKey(toDoNum, 'title');
    localStorage.setItem(titleKey, toDoItem.title);
};

const storeToDoDueDate = (toDoItem, toDoNum) => {
    const dueDateKey = generateToDoKey(toDoNum, 'duedate');
    localStorage.setItem(dueDateKey, toDoItem.dueDate);
};

const storeToDoPriority = (toDoItem, toDoNum) => {
    const priorityKey = generateToDoKey(toDoNum, 'priority');
    localStorage.setItem(priorityKey, toDoItem.priority);

};

const storeToDoDesc = (toDoItem, toDoNum) => {
    const descKey = generateToDoKey(toDoNum, 'desc');
    localStorage.setItem(descKey, toDoItem.description);
};

const storeToDoFolder = (activeFolderKey, toDoNum) => {
    const toDoFolderKey = generateToDoKey(toDoNum, 'folder');
    localStorage.setItem(toDoFolderKey, activeFolderKey);
};

const removeToDoFromStorage = (key) => {
    const titleKey = `${key}title`;
    const dueDateKey = `${key}duedate`;
    const priorityKey = `${key}priority`;
    const descKey = `${key}desc`;
    const folderKey = `${key}folder`;

    localStorage.removeItem(key);
    localStorage.removeItem(titleKey);
    localStorage.removeItem(dueDateKey);
    localStorage.removeItem(priorityKey);
    localStorage.removeItem(descKey);
    localStorage.removeItem(folderKey);
};

removeAllFolderToDos = (folder, toDoItem) => {
    //'folder' is the folder being deleted
    for (let i = 0; i <= localStorage.length; i++) {
        let toDoKeyWord = `todo${i}`;
        let toDoFolderKey = `${toDoKeyWord}folder`;
        let toDoFolder = localStorage.getItem(toDoFolderKey);
        if (toDoFolder == folder) {
            // let toDoTitle = `${toDoKeyWord}title`;
            // let toDoDueDate = `${toDoKeyWord}duedate`;
            // let toDoPriority = `${toDoKeyWord}priority`;
            removeToDoFromStorage(toDoKeyWord);
        }
    }

};

export { checkLocalStorage, generateFolderKey, storeFolder, storeToDo, removeFolderFromStorage, removeToDoFromStorage };