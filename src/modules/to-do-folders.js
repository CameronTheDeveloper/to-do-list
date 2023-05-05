const contentItems = document.querySelector('#content-items');

const addToDoFolder = (folderName) => {
    const folder = document.createElement('div');
    folder.classList.add('todo-folder', folderName);
    folder.appendChild('#content-items');
    return folder;
};

//In display-to-do (page-layout.js), replace to-do parent with folder
//Clear folder when folder-remove button is clicked
