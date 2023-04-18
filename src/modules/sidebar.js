import { addContent } from './page-layout';
const sideBar = document.querySelector('#sidebar');

const addSideBarContent = () => {
    addContent(sideBar, 'Hello', 'Message');
};

export { addSideBarContent };