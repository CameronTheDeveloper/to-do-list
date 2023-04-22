import '../styles/sidebar.css';
import { addContent, addButton, addAbove, addSideBarForm } from './page-layout';
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
const addSideBarContent = (sideBarButton) => {
    let sideBarItem = getSideBarInput();
    addAbove(sideBarItem, 'side-item', 'div', sideBarItems, sideBarButton);
    sideBarContent.push(sideBarItem);
};

const addSideBarButton = () => {
    const sideBarButton = addButton(sideBarItems, '+ Folder', 'sidebar-add-button');

    sideBarButton.addEventListener('click', () => {
        sideBarButton.remove();
        addSideBarForm(sideBarItems);
        // Also, addSideBarButton() when form submitted
    });

    sideBarButton.addEventListener('submit', () => {
        getSideBarInput();
    });

};

export { initSideBar };