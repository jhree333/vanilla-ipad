import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Privacy.css"

export default class Privacy extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("privacy")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext"><span class="visually-hidden">개인정보 보호 기능 내장.</span></h1>
          <div class="infos infos--large">
            <div class="info">
              <p>
                다른 모든 Apple 제품과 마찬가지로 iPad 역시 당신의 개인 정보 보호 및 보안을 염두에
                두고 설계되었습니다. 결코 쉽지만은 않은 작업이죠. 하지만 그런 것만이 진정한 혁신이라
                우리는 믿습니다.
              </p>
              <a href="javascript:void(0)" class="link">
                개인 정보 보호를 위한<br />
                우리의 노력에 대해 더 알아보기
              </a>
            </div>
          </div>
          <div class="figures">
            <figure>
              <img src="./images/privacy.jpg" alt="Safari에 표시" />
              <figcaption class="bgtext">
                <div class="caption-apple-id">
                  <span class="visually-hidden">Apple로 로그인</span>
                </div>
                <div class="caption-touch-id">
                  <span class="visually-hidden">지문으로 로그인하기</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      `
    }
    this.initIntersectionObserver()
  }
  private initIntersectionObserver() {
    const io = createIntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          return
        }
      })
    })

    const infoEls: NodeListOf<HTMLElement> = this.el.querySelectorAll(".info")
    observeElements(io, infoEls)
  }
}
