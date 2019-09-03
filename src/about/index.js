export default {
    extends: 'div',
    oninit() {
        this.setAttribute('class', 'content');
    },
    render() {
      this.html`
        <div>this is about</div>
      `;
    }
  }