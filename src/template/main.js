import {define} from 'heresy';
import About from "../about";
import Contact from "../contact";
import Projects from "../projects";
import Home from "../home";

/* initialize pages here */
const page = {
    about: define(About).new(),
    contact: define('Contact', Contact).new(),
    projects: define('Projects', Projects).new(),
    home: define('Home', Home).new()
};

export default {
    extends: 'section',
    observedAttributes: ['active-page'],
    onattributechanged(event = {attributeName, oldValue, newValue}) {
        this.render();
    },
    render() {
        const activePage = this.getAttribute('active-page');
        const aPage = page[activePage];
        this.html`
            ${aPage}
        `;
    }
};