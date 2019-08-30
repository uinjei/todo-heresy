import {define, ref, render, html} from 'heresy';
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import "./app.scss";

const App = {
    includes: {Header, Main, Footer},
    oninit() {
      this.handleMenu = this.handleMenu.bind(this);
    },
    handleMenu(e) {
      this.querySelector(".section")
          .setAttribute('active-page', e.target.text);
    },
    render() {
      this.html`
        <Header props="${{handleMenu: this.handleMenu}}"
            class="navbar" role="navigation" aria-label="main navigation"/>
        <Main class="section" active-page="Todo"/>
        <Footer class="footer"/>
      `;
    }
  };
  
  define('App', App);
  render(document.body, html`<App id="app"/>`);