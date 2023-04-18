import '../styles/sidebar.css';
import { addContent, addButton } from './page-layout';
import { getSideBarInput } from './get-user-input';

const sideBar = document.querySelector('#sidebar');
let sideBarContent = ['Projects', 'Today', 'This Week'];

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBar, sideBarContent[i], 'sidebar-item', 'div');
    }
};

const initSideBar = () => {
    renderSideBarContent();
    addSideBarButton();
};

//For when button clicked
const addSideBarContent = () => {
    let sideBarItem = getSideBarInput();
    addContent(sideBar, sideBarItem, 'sidebar-item', 'div');
};

const addSideBarButton = () => {
    const sideBarButton = addButton(sideBar, '+ Add Folder', 'sidebar-add-button');

    sideBarButton.addEventListener('click', () => {
        addSideBarContent();
        //sideBarContent.push(  );
    });
};
// sideBarButton.addEventListener('click', () => {
//     addSideBarContent();
//     //sideBarContent.push(  );
// });

export { initSideBar };