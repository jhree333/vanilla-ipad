import { Component } from "../core"
import "./Ar.css"

export default class Ar extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("ar")
      this.el.innerHTML = /*html*/ `
        <div class="whitebox">
          <div class="inner">
            <div>
              <img class="icon" src="./images/ar_icon.png" alt="AR Icon" />
              <h1>AR로 새로워진 iPad 미리 보기.</h1>
              <p>iPhone 또는 iPad에서 이 페이지를 Safari로 열어보세요.</p>
            </div>

            <img class="image" src="./images/ar_ipad.jpg" alt="AR Image" />
          </div>
        </div>
      `
    }
  }
}
