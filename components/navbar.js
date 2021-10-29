class Navbar extends HTMLElement {
    constructor() {super();}

    connectedCallback() {
        this.classList.add("nav-topmost");
        document.onscroll = function() {
            console.log(this);
            if (window.scrollY === 0)
                document.getElementById("navbar").classList.add("nav-topmost");
            else
                document.getElementById("navbar").classList.remove("nav-topmost");
            console.log(document.body.scrollTop);
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