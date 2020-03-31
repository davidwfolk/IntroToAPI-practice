export default class Clue {
    constructor(data) {
      this.category = data.category.title;
      this.question = data.question;
      this.answer = data.answer;
    }
  
    get Template() {
      return /*html*/ `
      <p>Cateogry: ${this.category}</p>
      <p>Question: ${this.question}</p>
      <p>Answer: What is ${this.answer}</p>
      `;
    }
  }