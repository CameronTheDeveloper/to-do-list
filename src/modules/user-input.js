const content = document.querySelector('#content');

const openSideBarForm = () => {

};

const getSideBarInput = () => {
    return document.getElementById('folder-title').value;
};

const registerSideBarSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = getSideBarInput();

        // Add input as folder
    });
};

export { registerSideBarSubmitListener };