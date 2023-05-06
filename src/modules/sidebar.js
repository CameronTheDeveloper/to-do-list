import '../styles/sidebar.css';
import { addContent, addButton, addSidebarForm } from './page-layout';
import { addToDoFolder } from './to-do-folders';

const sidebarItems = document.querySelector('#sidebar-items');
let sidebarContent = ['Projects', 'Today', 'ThisWeek'];

//Possible remove
const renderSidebarContent = () => {
    for (let i = 0; i < sidebarContent.length; i++) {
        addContent(sidebarItems, sidebarContent[i], 'sidebar-item', 'div');
        addToDoFolder(sidebarContent[i]);
    }
    addSidebarInput();
};

const initSidebar = () => {
    renderSidebarContent();
};

const addSidebarInput = () => {
    const sidebarForm = addSidebarForm(sidebarItems);
    const sidebarButton = addButton(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');

};

export { initSidebar };