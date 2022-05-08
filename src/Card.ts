import stylesheet from "./Card.css";

export default class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerHTML = stylesheet;

    const div = document.createElement("div");
    div.setAttribute("class", "card");
    const slot = document.createElement("slot");
    div.insertAdjacentElement("afterbegin", slot);



    this.shadowRoot.append(style, div);
  }
}
