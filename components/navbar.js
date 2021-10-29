class Navbar extends HTMLElement {
    constructor() {super();}

    connectedCallback() {
        document.onscroll = () => {
            if (window.scrollY === 0)
                document.getElementById("navbar").classList.add("nav-topmost");
            else
                document.getElementById("navbar").classList.remove("nav-topmost");
        }
        this.innerHTML =
`
<nav class="nav-topmost" id="navbar">
    <a class="nav-item" href="index.html">Domovská Stránka</a>
    <a class="nav-item" href="kontakt.html">Kontakt</a>
</nav>
`
    }
}

customElements.define('navbar-component', Navbar);