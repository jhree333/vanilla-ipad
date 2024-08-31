import { Component } from "../core"
import "./Trade.css"

export default class Trade extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("trade")
      this.el.innerHTML = /*html*/ `
        <div class="whitebox">
          <div class="inner">
            <h1>
              사용하던 iPad를 보상 판매하면 새 모델<br />
              구매 시 쓸 수 있는 크레딧이.<sup><a href="#footnote*">*</a></sup>
            </h1>
            <p>
              Apple Trade In을 통해 보상 판매 대상 iPad를 새 iPad 구매 시 쓸 수 있는 크레딧으로
              교환할 수 있습니다.<br />
              기기의 가치를 최대한 활용하는 것, 당신은 물론 지구에게도 좋은 일이죠.
            </p>
            <a href="javascript:void(0)" class="link">보상 판매 가격 알아보기</a>
          </div>
        </div>
      `
    }
  }
}
