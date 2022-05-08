import { add } from "./add.js";
import Card from "./Card";
import Form from "./Form";

console.log(add(1, 2));

customElements.define("base-card", Card);
customElements.define("base-form", Form);

const root = document.getElementById("root");
const newCard = document.createElement("base-card");
const form = document.createElement("base-form");
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("submitted", event.target);
});
const input = document.createElement("input");
const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.innerText = "Submit";
form.insertAdjacentElement("beforeend", input);
form.insertAdjacentElement("beforeend", submitButton);
form.shadowRoot.addEventListener("slotchange", event => console.log(event));
newCard.insertAdjacentElement("afterbegin", form);
root.insertAdjacentElement("afterbegin", newCard);
