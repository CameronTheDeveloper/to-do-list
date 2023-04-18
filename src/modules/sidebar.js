import { addContent } from './page-layout';
import { getSideBarInput } from './get-user-input';

const sideBar = document.querySelector('#sidebar');
const sideBarButton = document.querySelector('sidebar-button');
let sideBarContent = ['Projects', 'Today', 'This Week'];

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBar, sideBarContent[i], 'sidebar-item', 'div');
    }
};

const initSideBar = () => {
    renderSideBarContent();
    addContent(sideBar, 'Add Folder', 'sidebar-button', 'button');
};

//For when button clicked
const addSideBarContent = () => {
    let sideBarItem = getSideBarInput();
    addContent(sideBar, sideBarItem, 'sidebar-item', 'div');
};

// sideBarButton.addEventListener('click', () => {
//     addSideBarContent();
//     //sideBarContent.push(  );
// });

export { initSideBar };