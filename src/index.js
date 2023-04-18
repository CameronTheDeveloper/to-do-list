import './styles/index.css';
import { addContent } from './modules/page-layout';
const content = document.querySelector('#content');
const sideBar = document.querySelector('#sidebar');

addContent(sideBar, 'Hello', 'Message');