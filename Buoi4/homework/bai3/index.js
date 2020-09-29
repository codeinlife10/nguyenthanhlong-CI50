class formRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let $template = document.getElementById('form-register');
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

}

window.customElements.define('form-register', formRegister);

