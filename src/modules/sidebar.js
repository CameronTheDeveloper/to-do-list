import '../styles/sidebar.css';
import { addContent, addButton, addSidebarForm } from './page-layout';
import { addToDoFolder } from './to-do-folders';

const sidebarFolders = document.querySelector('#sidebar-folders');
let sidebarContent = ['Projects', 'Today', 'ThisWeek'];

//Possible remove
const renderSidebarContent = () => {
    for (let i = 0; i < sidebarContent.length; i++) {
        addContent(sidebarFolders, sidebarContent[i], 'sidebar-folder', 'div');
        addToDoFolder(sidebarContent[i]);
    }
    addSidebarInput();
};

const initSidebar = () => {
    renderSidebarContent();
};

const addSidebarInput = () => {
    const sidebarForm = addSidebarForm(sidebarFolders);
    const sidebarButton = addButton(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');
};

export { initSidebar };