import {define, ref, render, html} from 'heresy';

import {User, Pass} from './form/ui.js';
//import {validate, switchPage} from './form/utils.js';

export default {
  extends: 'form',
  includes: {User, Pass},
  oninit() {
    // refs can be declared upfront or inline (see render)
    this.user = ref();
    this.addEventListener('submit', this);
  },
  onsubmit(event) {
    event.preventDefault();
    //if (validate(this.user.current, this.pass.current))
      //fetch('/log-in').then(switchPage).catch(console.error);
  },
  // render is invoked automatically on connected
  // if no connected, or callback is explicitly defined
  render() {
    this.html`
    <label>Your name: <User ref=${this.user} name="user"></label>
    <label>Your pass: <Pass ref=${ref(this, 'pass')} name="pass"></label>
    `;
  }
}