let toDoCount = 0;

const generateToDoKey = (keyWord) => {
    return `todo${toDoCount}${keyWord}`;
};

const storeToDo = (toDoItem) => {
    const titleKey = generateToDoKey('title');
    //toDoItem.key = `todo${toDoCount}`
    //localStorate.setItem(toDoItem.title, )
    toDoCount++;
};