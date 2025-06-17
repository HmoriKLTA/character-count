// lib/controllers/character_count_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "counter"]

  connect() {
    // TODO: console.log something!
    console.log("hello");
  }

  updateCounter() {
    const count = this.inputTarget.value.length;
    this.counterTarget.innerText = count + " characters";
    if (count > 20) {
      this.counterTarget.innerText = `Number of characters exceeded by ${count - 20} characters.`;
      this.counterTarget.style.color = "red";
    } else {
      this.counterTarget.style.color = "black";
    }
  }
}
