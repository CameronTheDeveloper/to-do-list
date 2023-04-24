import '../styles/sidebar.css';
import { addContent, addButton, addAbove, addSidebarForm } from './page-layout';
import { getInput } from './user-input';

const sidebarItems = document.querySelector('#sidebar-items');
let sidebarContent = ['Projects', 'Today', 'This Week'];

const renderSidebarContent = () => {
    for (let i = 0; i < sidebarContent.length; i++) {
        addContent(sidebarItems, sidebarContent[i], 'sidebar-item', 'div');
    }
    addSidebarInput();
};

const initSidebar = () => {
    renderSidebarContent();
};

//For when button clicked
const addSidebarContent = (sidebarButton) => {
    let sidebarItem = getInput();
    addAbove(sidebarItem, 'side-item', 'div', sidebarItems, sidebarButton);
    sidebarContent.push(sidebarItem);
};

const addSidebarInput = () => {
    const sidebarForm = addSidebarForm(sidebarItems);
    const sidebarButton = addButton(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');
    // Make sidebarButton a "submit" type

    sidebarButton.addEventListener('submit', () => {
        getInput();
    });

};

export { initSidebar };