let $template = document.getElementById("template-form-register");
class formRegister extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");

    this.$formRegister = this.shadowRoot.querySelector(".form-register");
    this.$formRegister.onsubmit = (event) => {
      event.preventDefault();
      this.register();
    };
  }

  register() {
    let email = this.$email.value;
    let password = this.$password.value;

    if (this.validate(email, password)) {
      alert("đăng kí thành công");
      sessionStorage.setItem(email, password);
    }
  }
  //Waiting for a modern method 😂😂🤣🤣if...else ???
  validate(email, password) {
    let isPassed = true;
    if (email == "") {
      this.$email.error = "Nhập vào email";
      isPassed = false;
    } else {
      this.$email.error = "";
    }

    if (password == "") {
      isPassed = false;
      this.$password.error = "Nhập vào mật khẩu";
    } else {
      this.$password.error = "";
    }

    return isPassed;
  }
}

window.customElements.define("form-register", formRegister);
