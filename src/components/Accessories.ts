import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Accessories.css"

export default class Accessories extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("accessories")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext">
            <span class="visually-hidden">손으로 쓰거나 키보드로 치거나.</span>
          </h1>
          <div class="figures">
            <figure>
              <img
                src="./images/accessories.jpg"
                alt="Smart Keyboard와 Apple Pencil이 갖춰진 iPad에서 Split View로 Mail 앱의 이메일과 메모 앱의 손글씨 필기"
              />
              <figcaption class="bgtext">
                <div class="caption-memo">
                  <span class="visually-hidden">이메일도 타이핑 하고 손글씨 메모도 적고</span>
                </div>
                <div class="caption-supports">
                  <span class="visually-hidden">SMART KEYBOARD 및 APPLE PENCIL 지원</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div class="infos infos--large">
            <div class="info">
              <div class="icon icon--pencil"></div>
              <p>
                Apple Pencil은 실제 펜으로 종이에 쓰듯 자연스러운 느낌을 선사합니다. 동시에 당신의
                손글씨를 키보드로 입력한 텍스트만큼이나 강력하게 만들어주는 탁월한 역량을
                자랑하죠.<sup><a href="#footnote4">4</a></sup>
              </p>
            </div>
            <div class="info">
              <div class="icon icon--keyboard"></div>
              <p>
                얇고 가벼운 Smart Keyboard를 부착해 편안하게 타이핑하세요. 리포트 작성, 업무 기획
                등에 딱이죠.
              </p>
            </div>
            <div class="info">
              <div class="icon icon--notes"></div>
              <p>
                Apple Pencil을 활용해 기억에 남는 메모를 끄적이고, 멋진 예술 작품을 만들고,
                스크린샷에 마킹하는 등 실로 다양한 일을 할 수 있답니다.
              </p>
              <a href="javascript:void(0)" class="link">Apple Pencil에 대해 더 알아보기</a>
            </div>
            <div class="info">
              <div class="icon icon--covers"></div>
              <p>
                Smart Keyboard는 접으면 어딜 가든 iPad를 보호해주는 슬림하고 가벼운 커버가
                되어줍니다.<sup><a href="#footnote4">4</a></sup>
              </p>
              <a href="javascript:void(0)" class="link">Smart Keyboard에 대해 더 알아보기</a>
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
