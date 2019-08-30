export default {
    extends: 'div',
    oninit() {
        this.setAttribute('class', 'box');
    },
    render() {
        this.html`
            ${this.children}
        `;
    }
}