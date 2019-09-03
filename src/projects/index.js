import Tabs from "../components/tabs";
export default {
    extends: 'div',
    includes: {Tabs},
    oninit() {
        this.setAttribute('class', 'container');
    },
    render() {
      const items = [
        {
          name: 'bulma-heresy-table',
          active: 'is-active'
        },
        {
          name: 'bulma-heresy-tabs'
        }
      ]
      
      this.html`
        <div class="content">
          <h3>A collection of my projects here in github.</h3>
          <p>
            Lorem ipsum dolor
          </p>
          <Tabs data="${{items}}"/>  
        </div>
      `;
    }
  }