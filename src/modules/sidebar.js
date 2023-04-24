import '../styles/sidebar.css';
import { addContent, addButton, addSidebarForm } from './page-layout';

const sidebarItems = document.querySelector('#sidebar-items');
let sidebarContent = ['Projects', 'Today', 'This Week'];

//Possible remove
const renderSidebarContent = () => {
    for (let i = 0; i < sidebarContent.length; i++) {
        addContent(sidebarItems, sidebarContent[i], 'sidebar-item', 'div');
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