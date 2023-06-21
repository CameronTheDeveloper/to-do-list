import { getActiveFolderKey } from "./to-do-folders";
import { addToDoFolder } from "./to-do-folders";
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

const loadFolders = () => {
    let count = getFolderCount();
    for (let i = 0; i < count; i++){
        let folderKey = `${keyPrefix}folder${i}`;

        //If folder != null (Folder exists)
        let folderTitle = getFolderTitle(folderKey);
        addToDoFolder(folderTitle, 'active');
    }
}

const getFolderTitle = (folderKey) => {
    const folderTitleKey = `${folderKey}title`;
    const folderTitle = localStorage.getItem(folderTitleKey);
    return folderTitle;
}

const loadToDos = () => {
    let count = getToDoCount();
    for (let i = 0; i <= count; i++){
        //let toDoKey = `${keyPrefix}todo${i}`;
        //toDo = getItem(toDoKey)
        //addToDo(toDo)
        //Make function for this process
    }
}

const loadStorage = () => {
    loadFolders();
}

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

const getDefaultFolderKey = () => {
    const defaultFolderKey = generateFolderKey('0', '');
    return defaultFolderKey;
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
    const titleKey = `${key}title`;

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
    storeToDoFolderKey(activeFolderKey, toDoNum);
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

const storeToDoFolderKey = (activeFolderKey, toDoNum) => {
    const toDoFolderKey = generateToDoKey(toDoNum, 'folderkey');
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
    const folderKey = `${key}folderkey`;

    localStorage.removeItem(key);
    localStorage.removeItem(titleKey);
    localStorage.removeItem(dueDateKey);
    localStorage.removeItem(priorityKey);
    localStorage.removeItem(descKey);
    localStorage.removeItem(folderKey);

};

const removeFolderToDosFromStorage = (folderKey) => {
    const toDoCount = getToDoCount();
    let folderNum = localStorage.getItem(folderKey);

    for (let i = 0; i < toDoCount; i++) {
        let toDoKey = `${keyPrefix}todo${i}`;
        let toDoFolderKey = `${toDoKey}folderkey`;

        let toDoFolderValue = localStorage.getItem(toDoFolderKey);
        let folderNum2 = localStorage.getItem(toDoFolderValue);

        if (folderNum == folderNum2) {
            removeToDoFromStorage(toDoKey);
        }
    }

};

export { checkLocalStorage, loadStorage, generateFolderKey, getDefaultFolderKey, storeFolder, storeToDo, removeFolderFromStorage, removeFolderToDosFromStorage, removeToDoFromStorage };