import CluesService from "../Services/CluesService.js";
import store from "../store.js";

//Private
function _draw() {
  let clues = store.State.clues;
  let template = "";

  clues.forEach(c => (template += c.Template));
  document.getElementById("display").innerHTML = template;
}

//Public
export default class CluesController {
  constructor() {
    store.subscribe("clues", _draw);
  }

  getClues() {
    CluesService.getClues();
  }
  askQuestion() {
    CluesService.askQuestion();
  }
}