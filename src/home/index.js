export default {
    extends: 'div',
    oninit() {
        this.setAttribute('class', 'container');
    },
    render() {
      this.html`
        <div class="content">
            <h3>My official Github page.</h3>
            <p>
              Lorem ipsum dolor
            </p>
        </div>
      `;
    }
  }