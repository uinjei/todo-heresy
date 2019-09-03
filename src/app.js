import {define, ref, render, html} from 'heresy';
import Header from "./template/header";
import Main from "./template/main";
import Footer from "./template/footer";
import "./app.scss";

const App = {
    includes: {Header, Main, Footer},
    onclick(e) {
      if (e.target.id)
        this.main.current.setAttribute("active-page", e.target.id);
    },
    render() {
      this.html`
        <Header onclick="${this}" class="navbar is-fixed-top" role="navigation" aria-label="main navigation"/>
        <Main class="section" active-page="home" ref=${ref(this, 'main')}/>
        <Footer class="footer"/>
      `;
    }
  };
  
  define('App', App);
  render(document.body, html`<App id="app"/>`);