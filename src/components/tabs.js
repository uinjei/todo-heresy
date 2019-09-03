import {html,ref} from "heresy";

const Item = {
    extends: 'li',
    observedAttributes: ['class', 'text', 'idx'],
    onattributechanged(event = {attributeName, oldValue, newValue}) {
        this.render();
    },
    render() {
        this.html`
            <a id="${this.idx}">${this.text}</a>
        `;
    }
};

export default {
    extends: 'div',
    includes: {Item},
    oninit() {
        this.setAttribute('class', 'tabs is-boxed');
    },
    onclick(e) {
        const list = Array.from(this.list.current.children); 
        list.map(item => item.removeAttribute('class'));
        list[e.target.id].setAttribute('class', 'is-active');
    },
    render() {
        this.html`
            <ul ref=${ref(this, 'list')}>
                ${this.data.items.map((item, idx) =>
                    html`<Item idx="${idx}" class="${item.active}" text="${item.name}" onclick="${this}"/>`
                )}
            </ul>
        `;
    }
}