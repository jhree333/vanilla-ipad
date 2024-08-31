import { Component } from "../core"
import "./Nav.css"

export default class Nav extends Component {
  constructor() {
    super({ tagName: "nav" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.innerHTML = /*html*/ `
        <div class="shadow"></div>
          <div class="contents-bg"></div>
          <div class="inner">
            <h1>iPad</h1>
            <div class="menu-toggler"></div>
            <ul class="menu">
              <li class="active"><a href="javascript:void(0)">개요</a></li>
              <li><a href="javascript:void(0)">iPad를 선택하는 이유</a></li>
              <li><a href="javascript:void(0)">제품 사양</a></li>
            </ul>
            <button href="javascript:void(0)" class="btn">구입하기</button>
        </div>
    `
      this.setupNavMenuToggle()
    }
  }
  // 네비게이션 메뉴 토글 설정 메소드
  private setupNavMenuToggle() {
    const navEl = this.el as HTMLElement
    const navMenuToggleEl = navEl.querySelector(".menu-toggler") as HTMLElement
    const navMenuShadowEl = navEl.querySelector(".shadow") as HTMLElement

    navMenuToggleEl.addEventListener("click", () => {
      if (navEl.classList.contains("menuing")) {
        this.hideNavMenu(navEl)
      } else {
        this.showNavMenu(navEl)
      }
    })

    navEl.addEventListener("click", (event) => {
      event.stopPropagation()
    })

    navMenuShadowEl.addEventListener("click", () => this.hideNavMenu(navEl))
    window.addEventListener("click", () => this.hideNavMenu(navEl))
  }

  private showNavMenu(navEl: HTMLElement) {
    navEl.classList.add("menuing")
  }

  private hideNavMenu(navEl: HTMLElement) {
    navEl.classList.remove("menuing")
  }
}
