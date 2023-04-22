const content = document.querySelector('#content');

const openSideBarForm = () => {

};
const getSideBarInput = () => {
    console.log(document.getElementById('folder-title').value);
    return document.getElementById('folder-title').value;
};

export { getSideBarInput };