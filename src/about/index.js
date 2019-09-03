export default {
    extends: 'div',
    name: 'About',
    oninit() {
        this.setAttribute('class', 'content');
    },
    render() {
      this.html`
        <div>this is about</div>
      `;
    }
  }