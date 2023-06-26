import '../styles/sidebar.css';
import { addButton } from './page-dom';
import { addSidebarForm } from './form-dom';

const sidebarFolders = document.querySelector('#sidebar-folders');

const initSidebar = () => {
    addSidebarInput();
};

const addSidebarInput = () => {
    const sidebarForm = addSidebarForm(sidebarFolders);
    const sidebarButton = addButton(sidebarForm, 'submit', 'sidebar-add-button', 'active', '+ Folder');
};

export { initSidebar };