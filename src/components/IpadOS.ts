import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./IpadOS.css"

export default class IpadOS extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("ipados")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext"><span class="visually-hidden">iPadOS. 작업의 성공 방정식.</span></h1>
          <div class="infos infos--large">
            <div class="info">
              <p>
                널찍한 Multi-Touch 디스플레이를 위해 디자인된 iPadOS는 강력하면서도 누구든 손쉽게
                사용할 수 있습니다.
              </p>
            </div>
            <div class="info">
              <p>
                iPadOS 15는 사용하기 쉬운 멀티태스킹 기능, 정보를 검색하고 정리하는 새로운 방식,
                향상된 메모 기능 등을 통해 iPad의 성능을 한층 더 끌어올립니다.
              </p>
              <a href="javascript:void(0)" class="link">iPadOS의 새로운 기능 살펴보기</a>
            </div>
          </div>
          <div class="figures">
            <div class="figure-split-view">
              <figure>
                <img
                  src="./images/ipados_split_view.png"
                  alt="Split View로 이미지를 편집하면서 Mail 앱을 사용 중인 모습"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">두 개의 앱, 서로 양옆에 놓고 쓰기</span>
                </figcaption>
              </figure>
            </div>
            <div class="figure-widgets">
              <figure>
                <img src="./images/ipados_widgets.png" alt="홈 화면에 표시된 위젯" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">홈 화면에 바로 뜨는 위젯</span>
                </figcaption>
              </figure>
            </div>
            <div class="figure-quick-note">
              <figure>
                <img src="./images/ipados_quick_note.png" alt="Safari의 빠른 메모" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">어디서나 남기는 빠른 메모</span>
                </figcaption>
              </figure>
            </div>
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
