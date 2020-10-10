let $template = document.getElementById("main-content");
class mainContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$id = this.shadowRoot.getElementById("id");
    this.$datetime = this.shadowRoot.getElementById("datetime");
    this.$title = this.shadowRoot.getElementById("title");
    this.$content = this.shadowRoot.getElementById("content");
  }
}

window.customElements.define("main-content", mainContent);
