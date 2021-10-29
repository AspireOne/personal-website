class Footer extends HTMLElement {
    constructor() {super();}

    connectedCallback() {
        this.innerHTML =
`
<footer>
    <div id="bottom">
        <div id="bottom-icons">
            <div class="bottom-icon tooltip">
                <span class="tooltiptext">facebook.com/matej.pesl1</span>
                <a href="https://www.facebook.com/matej.pesl1" target="_blank" draggable="false" unselectable="on">
                    <ion-icon item-start name="logo-facebook" size="large"></ion-icon>
                </a>
            </div>

            <div class="bottom-icon tooltip">
                <span class="tooltiptext">matejpesl1@gmail.com</span>
                <a href="mailto:matejpesl1@gmail.com" target="_blank" draggable="false" unselectable="on">
                    <ion-icon item-start name="mail" size="large"></ion-icon>
                </a>
            </div>

            <div class="bottom-icon tooltip">
                <span class="tooltiptext">732 175 490</span>
                <a href="tel:+420732175490" target="_blank" draggable="false" unselectable="on">
                    <ion-icon item-start name="call" size="large"></ion-icon>
                </a>
            </div>

            <div class="bottom-icon tooltip">
                <span class="tooltiptext">github.com/AspireOne</span>
                <a href="https://www.github.com/AspireOne" target="_blank" draggable="false" unselectable="on">
                    <ion-icon item-start name="logo-github" size="large"></ion-icon>
                </a>
            </div>

        </div>
        <p id="copyright">© 2021 Matěj Pešl. Všechna práva vyhrazena.</p>
    </div>
</footer>
`
    }
}

customElements.define('footer-component', Footer);