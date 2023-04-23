import '../styles/sidebar.css';
import { addContent, addButton, addAbove, addSideBarForm } from './page-layout';
import { getSideBarInput } from './user-input';

const sideBarItems = document.querySelector('#sidebar-items');
let sideBarContent = ['Projects', 'Today', 'This Week'];

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBarItems, sideBarContent[i], 'sidebar-item', 'div');
    }
    addSideBarInput();
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

const addSideBarInput = () => {
    const sideBarForm = addSideBarForm(sideBarItems);
    const sideBarButton = addButton(sideBarForm, '+ Folder', 'sidebar-add-button', 'submit');
    // Make sideBarButton a "submit" type

    sideBarButton.addEventListener('submit', () => {
        getSideBarInput();
    });

};

export { initSideBar };