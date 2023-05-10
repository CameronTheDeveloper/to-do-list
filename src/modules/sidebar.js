import '../styles/sidebar.css';
import { addButton, addSidebarForm } from './page-layout';

const sidebarFolders = document.querySelector('#sidebar-folders');

const initSidebar = () => {
    addSidebarInput();
};

const addSidebarInput = () => {
    const sidebarForm = addSidebarForm(sidebarFolders);
    const sidebarButton = addButton(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');
};

export { initSidebar };