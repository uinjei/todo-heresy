import {html} from "heresy";

const Item = {
    extends: 'li',
    observedAttributes: ['class', 'item'],
    onattributechanged(event = {attributeName, oldValue, newValue}) {
        this.render();
    },
    render() {
        this.html`
            <a>${this.item}</a>
        `;
    }
}

export default {
    extends: 'div',
    includes: {Item},
    oninit() {
        this.setAttribute('class', 'tabs');
        this.handleActive = this.handleActive.bind(this);
        this.state = {active: 0};
    },
    handleActive(e) {
        this.state.active = e.target.parentElement.id;
        this.render();
    },
    render() {
        this.html`
            <ul>
                ${this.data.items.map((item, idx) => 
                    html`
                        <Item class="${idx==this.state.active?'is-active':''}"
                            id="${idx}"
                            onclick="${this.handleActive}"
                            item="${item}"/>
                        `
                )}
            </ul>
        `;
    }
}