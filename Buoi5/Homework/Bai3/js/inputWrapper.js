let $template = document.getElementById("template-input-wrapper");
class inputWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$label = this.shadowRoot.getElementById("input-label");
    this.$input = this.shadowRoot.getElementById("input-main");
    this.$error = this.shadowRoot.getElementById("input-error");
  }

  static get observedAttributes() {
    return ['label', 'type', 'error'];
  }
 
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'label') {
        this.$label.innerHTML = newValue;
    } else if (name == 'type') {
        this.$input.type = newValue;
    } else if (name == 'error') {
        this.$error.innerHTML = newValue;
    } 
}

  get value() {
    return this.$input.value;
  }

  set error(message) {
    this.$error.innerHTML = message;    
  }
}

window.customElements.define("input-wrapper", inputWrapper);
