import store from "../store.js";
import Clue from "../Models/Clue.js";

// @ts-ignore
let _api = new axios.create({
  baseURL: "http://jservice.io/api/",
  timeout: 7500
});

class CluesService {
  askQuestion() {
    this.getClues();
  }
  constructor() {}

  getClues() {
    _api
      .get("random")
      .then(res => {
        console.log(res.data)
        let clues = res.data.map(rawClueData => new Clue(rawClueData));
        store.commit("clues", clues);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const service = new CluesService();
export default service;