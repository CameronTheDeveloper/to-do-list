const contentItems = document.querySelector('#content-items');

const addToDoFolder = (folderName) => {
    const folder = document.createElement('div');
    folder.classList.add(folderName);
    folder.appendChild('#content-items');
};

//Clear folder when folder-remove button is clicked
