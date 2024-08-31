import { Component } from "../core"
import "./Environment.css"

export default class Environment extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("environment")
      this.el.innerHTML = /*html*/ `
        <div class="whitebox">
          <div class="inner">
            <img class="icon" src="./images/environment_icon.png" alt="Environment Icon" />
            <h1>환경</h1>
            <p>
              Apple은 제품의 라이프 사이클 전반에 걸쳐 우리의 환경 발자국에 대한 책임을 다합니다.<br />
              모든 Apple 제품과 포장재에 100% 재활용 및 재생 가능 소재만이 사용되는 그날을 위해
              헌신적인 노력을 기울이고 있습니다.<br />
              iPad는 환경에 미치는 영향을 줄이도록 다양한 특징을 적용하여 디자인되었습니다.
            </p>
            <a href="javascript:void(0)" class="link">Apple과 환경에 대해 더 알아보기</a>
          </div>
        </div>
      `
    }
  }
}
