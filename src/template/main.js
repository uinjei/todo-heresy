import {ref, define} from 'heresy';
import Box from "../components/box";
import Todo from "../todo";
import Login from "../login";

/* initialize pages here */
const todo = define('Todo', Todo).new();
const login = define('Login', Login).new();

export default {
    includes: {Box, Todo, Login},
    extends: 'section',
    observedAttributes: ['active-page'],
    onattributechanged(event = {attributeName, oldValue, newValue}) {
        this.render();
    },
    render() {
        const activePage = this.getAttribute('active-page');
        const page = activePage==='Todo'?todo:login;
        this.html`
            ${page}
        `;
    }
};