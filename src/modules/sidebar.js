import { addContent } from './page-layout';
const sideBar = document.querySelector('#sidebar');
let sideBarContent = ['Projects', 'Today', 'This Week'];

const renderSideBarContent = () => {
    for (let i = 0; i < sideBarContent.length; i++) {
        addContent(sideBar, sideBarContent[i], 'sidebar-item');
    }
};


export { renderSideBarContent };