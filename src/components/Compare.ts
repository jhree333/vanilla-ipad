import { Component } from "../core"
import ipads from "../data/ipads"
import "./Compare.css"

export default class Compare extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("compare")
      this.el.innerHTML = /*html*/ `
        <div class="whitebox">
          <div class="inner">
            <h1>당신에게 맞는 iPad는?</h1>

            <div class="items">
              <!-- Insert via JS -->
            </div>

            <div class="links">
              <a href="javascript:void(0)" class="link">모든 iPad 모델 비교하기</a>
              <a href="javascript:void(0)" class="link">iPad 쇼핑하기</a>
            </div>
          </div>
        </div>
      `
      this.renderItems()
    }
  }
  private renderItems() {
    const itemsEl = this.el.querySelector(".items")
    if (itemsEl) {
      ipads.forEach((ipad) => {
        const itemEl = document.createElement("div")
        itemEl.classList.add("item")

        let colorList = ""
        ipad.colors.forEach((color) => {
          colorList += `<li style="background-color: ${color};"></li>`
        })

        // 템플릿 리터럴을 사용하여 HTML을 동적으로 생성
        itemEl.innerHTML = /* html */ `
          <div class="thumbnail">
            <img src="${ipad.thumbnail}" alt="${ipad.name}" />
          </div>
          <ul class="colors">
            ${colorList}
          </ul>
          <h3 class="name">${ipad.name}</h3>
          <p class="tagline">${ipad.tagline}</p>
          <p class="price">₩${ipad.price.toLocaleString("en-US")}부터</p>
          <button class="btn">구입하기</button>
          <a href="${ipad.url}" class="link">더 알아보기</a>
        `

        itemsEl.append(itemEl)
      })
    }
  }
}
