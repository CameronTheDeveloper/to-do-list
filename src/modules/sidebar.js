import '../styles/sidebar.css';
import { addContent, addButton, clearHTML, removeHTML } from './page-layout';
import { getSideBarInput } from './get-user-input';

const sideBarItems = document.querySelector('#sidebar-items');
let sideBarContent = ['Projects', 'Today', 'This Week'];

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBarItems, sideBarContent[i], 'sidebar-item', 'div');
    }
    addSideBarButton();
};

const initSideBar = () => {
    renderSideBarContent();
};

//For when button clicked
const addSideBarContent = () => {
    let sideBarItem = getSideBarInput();
    addContent(sideBarItems, sideBarItem, 'sidebar-item', 'div');
    sideBarContent.push(sideBarItem);
};

const addSideBarButton = () => {
    const sideBarButton = addButton(sideBarItems, '+ Add Folder', 'sidebar-add-button');

    sideBarButton.addEventListener('click', () => {
        clearHTML(sideBarItems);
        addSideBarContent();
        renderSideBarContent();
    });
};

export { initSideBar };