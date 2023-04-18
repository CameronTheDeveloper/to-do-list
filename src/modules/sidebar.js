import { addContent } from './page-layout';
import { getSideBarInput } from './get-user-input';

const sideBar = document.querySelector('#sidebar');
const sideBarButton = document.createElement('button');
let sideBarContent = ['Projects', 'Today', 'This Week'];



const addSideBarContent = () => {
    let sideBarItem = getSideBarInput();
    addContent(sideBar, sideBarItem, 'sidebar-item');
};

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBar, sideBarContent[i], 'sidebar-item');
    }
};

const initSideBar = () => {
    addContent(sideBar, sideBarButton, 'sidebar-button');
    renderSideBarContent();
};

export { initSideBar };