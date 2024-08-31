import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Wireless.css"

export default class Wireless extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("wireless")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <div class="facetime">
            <h1 class="bgtext">
              <span class="visually-hidden">선이 없다는 건 한계가 없다는 것.</span>
            </h1>
            <div class="figures">
              <figure>
                <img
                  src="./images/wireless_facetime.jpg"
                  alt="19명이 참여 중인 FaceTime 영상 통화"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">FACETIME으로 소통하고</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="files feature">
            <div class="infos">
              <div class="info">
                <div class="icon icon--download"></div>
                <p>
                  어디에서든 파일을 다운로드하고, 영화를 스트리밍하고, 동료와 협업하거나 콘텐츠를
                  업로드할 수 있습니다.
                </p>
              </div>
              <div class="info">
                <div class="icon icon--wifi"></div>
                <p>
                  고속 Wi-Fi 덕분에 집, 직장, 학교 등 iPad와 함께하는 어디에서든 인터넷에 연결할 수
                  있습니다.
                </p>
              </div>
              <div class="info">
                <div class="icon icon--lte"></div>
                <p>
                  Gigabit급 LTE 덕분에 Wi-Fi에 연결할 수 없는 경우에도 온라인 접속이 가능합니다.<sup
                    ><a href="#footnote3">3</a></sup
                  >
                </p>
                <a href="javascript:void(0)" class="link">셀룰러에 대해 더 알아보기</a>
              </div>
            </div>
            <div class="figures">
              <figure>
                <img src="./images/wireless_files.png" alt="파일, iCloud Drive 선택 화면" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">모든 파일 확인을 이동 중에도</span>
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
