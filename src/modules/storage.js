import { getActiveFolderKey } from "./to-do-folders";
const keyPrefix = 'toDoListProject_';
const folderCountKey = `${keyPrefix}folderCount`;
const toDoCountKey = `${keyPrefix}toDoCount`;


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
    return `${keyPrefix}folder${folderNum}${keyWord}`;
};

const storeFolder = (title, folder) => {
    let folderNum = getFolderCount();

    storePrimaryFolderKey(folder, folderNum);
    storeFolderTitle(title, folderNum);
    incrementFolderCount(folderNum);
};

const storePrimaryFolderKey = (folder, folderNum) => {
    folder.key = `${keyPrefix}folder${folderNum}`;
    localStorage.setItem(folder.key, `folder${folderNum}`);
};

const storeFolderTitle = (title, folderNum) => {
    const titleKey = generateFolderKey(folderNum, 'title');
    localStorage.setItem(titleKey, title);
};

const incrementFolderCount = (folderNum) => {
    folderNum++;
    localStorage.setItem(folderCountKey, folderNum);
};

const removeFolderFromStorage = (folder) => {
    const key = folder.key;
    const titleKey = `${keyPrefix}${key}title`;

    removeFolderToDosFromStorage(key);
    localStorage.removeItem(key);
    localStorage.removeItem(titleKey);
};

/* To Do */

const generateToDoKey = (toDoNum, keyWord) => {
    return `${keyPrefix}todo${toDoNum}${keyWord}`;
};

const storeToDo = (toDoItem) => {
    let toDoNum = getToDoCount();
    const activeFolderKey = getActiveFolderKey();

    toDoItem.folderKey = activeFolderKey;
    storePrimaryToDoKey(toDoItem, toDoNum);
    storeToDoTitle(toDoItem, toDoNum);
    storeToDoDueDate(toDoItem, toDoNum);
    storeToDoPriority(toDoItem, toDoNum);
    storeToDoDesc(toDoItem, toDoNum);
    storeToDoFolder(activeFolderKey, toDoNum);
    incrementToDoCount(toDoNum);
};

const storePrimaryToDoKey = (toDoItem, toDoNum) => {
    toDoItem.key = `${keyPrefix}todo${toDoNum}`;
    localStorage.setItem(toDoItem.key, `todo${toDoNum}`);
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

const incrementToDoCount = (toDoNum) => {
    toDoNum++;
    localStorage.setItem(toDoCountKey, toDoNum);
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

const removeFolderToDosFromStorage = (folderKey) => {
    let folderNum = localStorage.getItem(folderKey);

    for (let i = 0; i <= localStorage.length; i++) {
        let toDoKeyWord = `${keyPrefix}todo${i}`;  // = toDo key
        let toDoFolderKey = `${toDoKeyWord}folder`;// = toDoFolder key

        let toDoFolder = localStorage.getItem(toDoFolderKey);

        if (toDoFolder == folderKey) {
            removeToDoFromStorage(toDoKeyWord);
        }
        //Write else statement for null values (Deleted keys)
        //Write a loop that increments i until !Null 
    }

};

export { checkLocalStorage, generateFolderKey, storeFolder, storeToDo, removeFolderFromStorage, removeFolderToDosFromStorage, removeToDoFromStorage };