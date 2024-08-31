import { Component } from "../core"
import "./Hero.css"

export default class Hero extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("hero")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext"><span class="visually-hidden">iPad</span></h1>
          <div class="figures">
            <figure>
              <img src="./images/hero_ipad.jpg" alt="iPad와 Smart Keyboard 및 Apple Pencil" />
              <figcaption class="bgtext">
                <div class="caption-camera">
                  <span class="visually-hidden"
                    >센터 스테이지 기술이 적용된 새로운 울트라 와이드 전면 카메라</span
                  >
                </div>
                <div class="caption-chip">
                  <span class="visually-hidden">A13 BIONIC 칩 전격 탑재</span>
                </div>
                <div class="caption-storage">
                  <span class="visually-hidden">저장 용량은 64GB부터</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <h2 class="bgtext"><span class="visually-hidden">매사를 더욱 쉽게.</span></h2>
          <p class="pricing">₩449,000부터</p>
          <p class="description">
            강력한 성능에 간편함과 다재다능까지 갖춘 새로워진 iPad. 당신이 어떤 일을 즐겨하든 함께할
            수 있도록 디자인되었습니다. 작업, 취미, 공부, 소통 등. 이 모든 것을 부담 없이 누릴 수
            있죠.
          </p>
          <div class="links">
            <a href="javascript:void(0)" class="link">이벤트 시청하기</a>
            <a href="javascript:void(0)" class="link">iPad를 선택하는 이유</a>
          </div>
        </div>
    `
    }
  }
}
