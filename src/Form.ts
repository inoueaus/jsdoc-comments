import stylesheet from "./Form.css";

export default class Form extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.innerHTML = stylesheet;

    const form = document.createElement("form");
    form.addEventListener("submit", event => {
      event.preventDefault();
      console.log(new FormData(form));
      this.dispatchEvent(new Event("submit"));
    });

    // const input = document.createElement("input");
    // const submitButton = document.createElement("button");
    // submitButton.setAttribute("type", "submit");
    // submitButton.innerText = "Submit";
    // form.append(input, submitButton);

    const slot = document.createElement("slot");
    form.append(slot);

    this.shadowRoot.append(style, form);
  }
}
