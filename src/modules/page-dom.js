import { addToDoClickEventListener } from "./to-do-mode";
import { addAttributes, addButtonAttributes } from "./attributes";
import { registerRemoveFolderListener } from "./user-input";
import { format, parse } from "date-fns";


const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFolderContentElements = (contentItems, folderClass) => {
    const folderParent = addAttributes('', 'class', 'todo-folder', 'div');
    folderParent.classList.add(folderClass);
    contentItems.appendChild(folderParent);
    return folderParent;
};

const addFolderSidebarElements = (folder, folderContentDiv, buttonClass) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const sidebarFolders = document.querySelector('#sidebar-folders');
    const sidebarDiv = addAbove('sidebar-folder', 'div', sidebarFolders, sidebarForm);
    const sidebarTitle = addAttributes(folder.title, 'class', 'sidebar-folder-title', 'div');
    const removeButton = addFolderClearButton(sidebarDiv, buttonClass);

    addSidebarFolderChildElements(sidebarDiv, sidebarTitle, removeButton);
    registerRemoveFolderListener(removeButton, folderContentDiv, sidebarDiv, folder);
    return sidebarDiv;
};

const addSidebarFolderChildElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const formatToDoDate = (date) => {
    const dateString = date.toString();
    const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
    const formattedDate = format(parsedDate, 'MMMM dd, yyyy');

    return formattedDate;
};

const addToDoContent = (toDoItem) => {
    const toDoContentDiv = document.createElement('div');
    const dueDateDiv = addAttributes('', 'class', 'due-date-div', 'div');
    const dueDateLabel = addAttributes('Due - ', 'class', 'duedate-label', 'div');
    const formattedDate = formatToDoDate(toDoItem.dueDate);
    const dueDateValue = addAttributes(formattedDate, 'class', 'due-date', 'div');
    const priorityDiv = addAttributes('', 'class', 'priority-div', 'div');
    const priorityLabel = addAttributes('Priority - ', 'class', 'priority-label', 'div');
    const priorityValue = addAttributes(toDoItem.priority, 'class', 'priority', 'div');

    const descDiv = addAttributes(toDoItem.description, 'class', 'description', 'p');

    toDoContentDiv.setAttribute('class', 'todo-content');
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateValue);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityValue);
    toDoContentDiv.appendChild(dueDateDiv);
    toDoContentDiv.appendChild(priorityDiv);
    toDoContentDiv.appendChild(descDiv);
    return toDoContentDiv;
    //Add labels for each div (Like 'due: ')
    //To add 'todo expand' feature, hide toDoContentDiv when clicked
};

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = addAttributes('', 'class', 'todo expand-mode', 'div');
    const titleDiv = addAttributes(toDoItem.title, 'class', 'title', 'div');
    const toDoContentDiv = addToDoContent(toDoItem);

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(toDoContentDiv);
    addToDoClickEventListener(toDoParent, toDoItem);
};

const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = addAttributes('', 'class', className, elementType);
    parent.insertBefore(element, lowerDiv);
    return element;
};

const addButton = (parent, type, id, className, text) => {
    const button = addAttributes(text, 'id', id, 'button');
    addButtonAttributes(button, type, id, className, text);
    parent.appendChild(button);
    return button;
};

const addFolderClearButton = (parent, activeClass) => {
    const button = addAttributes('X', 'class', 'remove-folder-button ' + activeClass, 'button');
    parent.appendChild(button);
    return button;
};

const hideElements = (elements) => {
    elements.forEach((element) => {
        element.style.display = 'none';
    });
};

export {
    addContent,
    addButton,
    addAbove,
    displayToDo,
    hideElements,
    addFolderContentElements,
    addFolderSidebarElements
};