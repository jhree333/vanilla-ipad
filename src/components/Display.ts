import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Display.css"

export default class Display extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("display")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <div class="notes">
            <h1 class="bgtext">
              <span class="visually-hidden">빛나는 아이디어에 걸맞은 디스플레이.</span>
            </h1>
            <div class="figures">
              <figure>
                <img
                  src="./images/display_notes.jpg"
                  alt="iPad의 Goodnotes 5 앱에서 편집 중인 손글씨 필기"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">노트 필기는 GOODNOTES 5로</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="shareplay feature">
            <div class="figures">
              <figure>
                <img
                  src="./images/display_shareplay.png"
                  alt="SharePlay 기능으로 영상을 함께 즐기는 모습"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">함께 보고 함께 즐기고</span>
                </figcaption>
              </figure>
            </div>
            <div class="infos infos--center">
              <div class="info">
                <div class="icon icon--display"></div>
                <p>
                  놀랍도록 섬세한 디테일과 생생한 색상을 자랑하는 25.9cm Retina 디스플레이를 갖춘
                  iPad.<sup><a href="#footnote2">2</a></sup>
                  영화를 감상할 때도, 프로젝트를 진행할 때도 또는 멋진 그림을 그릴 때도 더할 나위
                  없죠.
                </p>
              </div>
              <div class="info">
                <div class="icon icon--true-tone"></div>
                <p>
                  True Tone이 주변의 조명에 맞춰 색온도를 조절해줍니다. 덕분에 어떤 조명에서도 눈이
                  편안한 화면을 경험할 수 있죠.
                </p>
              </div>
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
