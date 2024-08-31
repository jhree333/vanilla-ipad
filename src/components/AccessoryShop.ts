import { Component } from "../core"

import "./AccessoryShop.css"

export default class AccessoryShop extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("accessory-shop")
      this.el.innerHTML = /*html*/ `
        <div class="whitebox whitebox--transparent">
          <div class="inner">
            <h1>iPad의 능력을 키워주는<br />액세서리.</h1>
            <p>케이스, 커버, Apple Pencil, AirPods 등 다양한 액세서리를 만나보세요.</p>
            <a href="javascript:void(0)" class="link">iPad 액세서리 쇼핑하기</a>
            <img src="./images/ipad_accessories.jpg" alt="다양한 액세서리 이미지" />
          </div>
        </div>
      `
    }
  }
}
