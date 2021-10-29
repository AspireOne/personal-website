class Navbar extends HTMLElement {
    constructor() {super();}

    connectedCallback() {
        this.innerHTML =
`
<nav>
    <a class="nav-item" href="index.html">Domovská Stránka</a>
    <a class="nav-item" href="kontakt.html">Kontakt</a>
</nav>
`
    }
}

customElements.define('navbar-component', Navbar);