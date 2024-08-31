import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Apps.css"

export default class Apps extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("apps")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <h1 class="bgtext"><span class="visually-hidden">열정을 살려줄 다양한 앱.</span></h1>
          <div class="infos infos--large">
            <div class="info">
              <p>
                iPad에는 이미 ‘사진’, ‘지도’, ‘메시지’, Mail, Safari 등 강력한 Apple 제작 앱들이
                가득 담겨있습니다. 게다가 100만 개 이상의 iPad 전용 앱이 준비된 App Store에서는 어떤
                작업이든 걸맞은 앱을 찾을 수 있죠. 비트를 찍거나, 운동을 하거나, 뉴스를 읽을 수도
                있습니다. 심심할 땐 친구들과 신나는 게임 한 판을 즐길 수도 있죠.
              </p>
              <a href="javascript:void(0)" class="link">App Store에서 iPad용 앱 찾아보기</a>
            </div>
          </div>
          <div class="figures">
            <div class="figure-masterclass">
              <figure>
                <img
                  src="./images/apps_masterclass.png"
                  alt="iPad에 MasterClass 앱이 열려 있는 모습"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">Masterclass</span>
                </figcaption>
              </figure>
            </div>
            <div class="figure-adobe">
              <figure>
                <img src="./images/apps_adobe.png" alt="iPad에 Adobe Fresco 앱이 열려 있는 모습" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">Adobe Fresco</span>
                </figcaption>
              </figure>
            </div>
            <div class="figure-fantasian">
              <figure>
                <img src="./images/apps_fantasian.png" alt="iPad에 Fantasian 앱이 열려 있는 모습" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">Fantasian</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="figures">
            <div class="figure-books">
              <figure>
                <img src="./images/apps_books.png" alt="iPad에 도서 앱이 열려 있는 모습" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">도서 앱</span>
                </figcaption>
              </figure>
            </div>
            <div class="figure-goodnotes">
              <figure>
                <img
                  src="./images/apps_goodnotes.png"
                  alt="iPad에 Goodnotes 5 앱이 열려 있는 모습"
                />
                <figcaption class="bgtext">
                  <span class="visually-hidden">GoodNotes 5 </span>
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
