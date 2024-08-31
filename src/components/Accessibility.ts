import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Accessibility.css"

export default class Accessibility extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("accessibility")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext"><span class="visually-hidden">모두를 위해 만들다.</span></h1>
          <div class="infos infos--large">
            <div class="info">
              <p>
                누구나 사용할 수 있는 기술이야말로 가장 강력한 기술입니다. iPad에 시각, 청각, 운동
                및 인지능력 등을 보완해주는 손쉬운 사용 기능을 탑재한 이유도 바로 그 때문이죠. 그룹
                FaceTime 통화 중 수어를 사용하는 사람이 있는 경우, 그 사람이 이야기 중인 것을 알 수
                있도록 해당 타일을 더 크게 표시해주는 것이 좋은 예입니다.
              </p>
              <a href="javascript:void(0)" class="link">모든 손쉬운 사용 기능 살펴보기</a>
            </div>
          </div>
          <div class="figures">
            <figure>
              <img src="./images/accessibility.jpg" alt="FaceTime 앱으로 4명이 수어로 영상 통화" />
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
