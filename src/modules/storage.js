let toDoCount = 0;

const generateToDoKey = (keyWord) => {
    return `todo${toDoCount}${keyWord}`;
};

const storeToDo = (toDoItem) => {
    const titleKey = generateToDoKey('title');
    const dueDateKey = generateToDoKey('duedate');
    const priorityKey = generateToDoKey('priority');
    const descKey = generateToDoKey('desc');

    toDoItem.key = `todo${toDoCount}`;
    localStorage.setItem(toDoItem.key, toDoItem.key);
    localStorage.setItem(titleKey, toDoItem.title);
    localStorage.setItem(dueDateKey, toDoItem.dueDate);
    localStorage.setItem(priorityKey, toDoItem.priority);
    localStorage.setItem(descKey, toDoItem.description);
    toDoCount++;
};

export { storeToDo };