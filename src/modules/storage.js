let toDoCount = 0; //Add to storage. Add function that sets to 0 if storage is empty
let folderCount = 0;

/* Folder */

const generateFolderKey = () => {
    return `folder${folderCount}`;
};

const storeFolder = (key, folder) => {
    localStorage.setItem(key, folder.key);
    folderCount++;
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

    toDoItem.key = `todo${toDoCount}`;// Move this to todo.js when keyCount has getItem()
    localStorage.setItem(toDoItem.key, toDoItem.key);
    localStorage.setItem(titleKey, toDoItem.title);
    localStorage.setItem(dueDateKey, toDoItem.dueDate);
    localStorage.setItem(priorityKey, toDoItem.priority);
    localStorage.setItem(descKey, toDoItem.description);
    toDoCount++;
};

const removeToDoFromStorage = (toDoItem) => {
    const key = toDoItem.key;
    const titleKey = `${key}title`;
    const dueDateKey = `${key}duedate`;
    const priorityKey = `${key}priority`;
    const descKey = `${key}desc`;

    localStorage.removeItem(toDoItem.key);
    localStorage.removeItem(titleKey);
    localStorage.removeItem(dueDateKey);
    localStorage.removeItem(priorityKey);
    localStorage.removeItem(descKey);
};

export { generateFolderKey, storeFolder, storeToDo, removeToDoFromStorage };