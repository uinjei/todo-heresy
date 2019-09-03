export default {
    extends: 'nav',
    render() {
        this.html`
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" id="home">Home</a>
                    <a class="navbar-item" id="projects">Projects</a>
                    <a class="navbar-item" id="about">About</a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-primary" id="contact">
                            <strong>Contact Me</strong>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};