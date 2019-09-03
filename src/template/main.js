import {define} from 'heresy';
import About from "../about";
import Contact from "../contact";
import Projects from "../projects";
import Home from "../home";

/* initialize pages here */
const about = define('About', About).new();
const contact = define('Contact', Contact).new();
const projects = define('Porjects', Projects).new();
const home = define('Home', Home).new();

const page = {
    about,
    contact,
    projects,
    home
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