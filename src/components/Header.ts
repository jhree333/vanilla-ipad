import { Component } from "../core"
import "./Header.css"

export default class Header extends Component {
  private duration = 0.4

  constructor() {
    super({ tagName: "header" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.innerHTML = /* html */ `
      <div class="inner">
        <ul class="menu">
          <li class="menu-starter">
            <a>
              <div>
                <span></span>
                <span></span>
              </div>
            </a>
          </li>
          <li class="apple-logo">
            <a href="javascript:void(0)"><span class="visually-hidden">Apple</span></a>
          </li>
          <li><a href="javascript:void(0)">스토어</a></li>
          <li><a href="javascript:void(0)">Mac</a></li>
          <li><a href="javascript:void(0)">iPad</a></li>
          <li><a href="javascript:void(0)">iPhone</a></li>
          <li><a href="javascript:void(0)">Watch</a></li>
          <li><a href="javascript:void(0)">AirPods</a></li>
          <li><a href="javascript:void(0)">TV 및 홈</a></li>
          <li><a href="javascript:void(0)">Apple 독점 제공</a></li>
          <li><a href="javascript:void(0)">액세서리</a></li>
          <li><a href="javascript:void(0)">고객지원</a></li>
          <li class="search-starter">
            <a href="javascript:void(0)"><span class="visually-hidden">검색</span></a>
          </li>
          <li class="basket-starter">
            <a href="javascript:void(0)"><span class="visually-hidden">장바구니</span></a>
            <div class="basket">
              <div class="arrow"></div>
              <div class="message">장바구니가 비어 있습니다.</div>
              <ul>
                <li><a href="javascript:void(0)">장바구니</a></li>
                <li><a href="javascript:void(0)">저장된 항목</a></li>
                <li><a href="javascript:void(0)">주문</a></li>
                <li><a href="javascript:void(0)">계정</a></li>
                <li><a href="javascript:void(0)">로그인</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="search-wrap">
          <div class="search">
            <div class="shadow"></div>
            <div class="textfield">
              <input type="text" placeholder="apple.com 검색" />
              <div class="search-icon"></div>
              <div class="search-closer"></div>
            </div>
            <div class="search-canceler">취소</div>
            <div class="autocompletes">
              <h3>빠른 링크</h3>
              <ul>
                <li><a href="javascript:void(0)">Apple Store 임시 휴무 관련 자주하는 질문</a></li>
                <li><a href="javascript:void(0)">Apple Store Online에서 쇼핑하기</a></li>
                <li><a href="javascript:void(0)">액세서리</a></li>
                <li><a href="javascript:void(0)">AirPods</a></li>
                <li><a href="javascript:void(0)">AirTag</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="clone-menu">
          <ul>
            <li><a href="javascript:void(0)">스토어</a></li>
            <li><a href="javascript:void(0)">Mac</a></li>
            <li><a href="javascript:void(0)">iPad</a></li>
            <li><a href="javascript:void(0)">iPhone</a></li>
            <li><a href="javascript:void(0)">Watch</a></li>
            <li><a href="javascript:void(0)">AirPods</a></li>
            <li><a href="javascript:void(0)">TV 및 홈</a></li>
            <li><a href="javascript:void(0)">Apple 독점 제공</a></li>
            <li><a href="javascript:void(0)">액세서리</a></li>
            <li><a href="javascript:void(0)">고객지원</a></li>
          </ul>
        </div>
      </div>
    `
      this.setupBasket()
      this.setupSearch()
      this.setupMobileMenu()
      this.setupMobileSearch()
      this.setupResizeEvent()
    }
  }
  private setupBasket() {
    const basketStarterEl = this.el.querySelector(".basket-starter")
    const basketEl = basketStarterEl?.querySelector(".basket")

    if (!basketStarterEl || !basketEl) return

    basketStarterEl.addEventListener("click", (e) => {
      e.stopPropagation() // 이벤트 버블링 정지
      if (basketEl.classList.contains("show")) {
        this.hideBasket(basketEl)
      } else {
        this.showBasket(basketEl)
      }
    })

    basketEl.addEventListener("click", (e) => {
      e.stopPropagation() // 드롭다운 메뉴 영역 클릭 시 메뉴 유지
    })

    window.addEventListener("click", () => {
      this.hideBasket(basketEl)
    })
  }

  private showBasket(basketEl: Element) {
    basketEl.classList.add("show")
  }

  private hideBasket(basketEl: Element) {
    basketEl.classList.remove("show")
  }

  private setupSearch() {
    const headerEl = this.el as HTMLElement
    const headerMenuEls = [...headerEl.querySelectorAll("ul.menu > li")] as HTMLElement[]
    const searchWrapEl = headerEl.querySelector(".search-wrap")
    const searchStarterEl = headerEl.querySelector(".search-starter")
    const searchCloserEl = searchWrapEl?.querySelector(".search-closer")
    const searchShadowEl = searchWrapEl?.querySelector(".shadow")
    const searchInputEl = searchWrapEl?.querySelector("input")
    const searchDelayEls = [...(searchWrapEl?.querySelectorAll("li") || [])]

    if (!searchWrapEl || !searchStarterEl || !searchCloserEl || !searchShadowEl || !searchInputEl)
      return

    searchStarterEl.addEventListener("click", () =>
      this.showSearch(headerEl, headerMenuEls, searchInputEl, searchDelayEls)
    )
    searchCloserEl.addEventListener("click", (event) => {
      event.stopPropagation()
      this.hideSearch(headerEl, headerMenuEls, searchInputEl, searchDelayEls)
    })
    searchShadowEl.addEventListener("click", () =>
      this.hideSearch(headerEl, headerMenuEls, searchInputEl, searchDelayEls)
    )
  }

  private showSearch(
    headerEl: HTMLElement,
    headerMenuEls: HTMLElement[],
    searchInputEl: HTMLInputElement,
    searchDelayEls: HTMLElement[]
  ) {
    headerEl.classList.add("searching")
    this.stopScroll()
    headerMenuEls.reverse().forEach((el, index) => {
      el.style.transitionDelay = `${(index * this.duration) / headerMenuEls.length}s`
    })
    searchDelayEls.forEach((el, index) => {
      el.style.transitionDelay = `${(index * this.duration) / searchDelayEls.length}s`
    })
    setTimeout(() => {
      searchInputEl.focus()
    }, 600)
  }

  private hideSearch(
    headerEl: HTMLElement,
    headerMenuEls: HTMLElement[],
    searchInputEl: HTMLInputElement,
    searchDelayEls: HTMLElement[]
  ) {
    headerEl.classList.remove("searching")
    this.playScroll()
    headerMenuEls.reverse().forEach((el, index) => {
      el.style.transitionDelay = `${(index * this.duration) / headerMenuEls.length}s`
    })
    searchDelayEls.reverse().forEach((el, index) => {
      el.style.transitionDelay = `${(index * this.duration) / searchDelayEls.length}s`
    })
    searchDelayEls.reverse()
    searchInputEl.value = ""
  }

  private playScroll() {
    document.documentElement.classList.remove("fixed")
  }

  private stopScroll() {
    document.documentElement.classList.add("fixed")
  }
  private setupMobileMenu() {
    const headerEl = this.el as HTMLElement
    const menuStarterEl = headerEl.querySelector(".menu-starter") as HTMLElement

    menuStarterEl.addEventListener("click", () => {
      if (headerEl.classList.contains("menuing")) {
        headerEl.classList.remove("menuing")
        const searchInputEl = headerEl.querySelector("input") as HTMLInputElement
        searchInputEl.value = ""
        this.playScroll()
      } else {
        headerEl.classList.add("menuing")
        this.stopScroll()
      }
    })
  }
  private setupMobileSearch() {
    const headerEl = this.el as HTMLElement
    const searchTextFieldEl = headerEl.querySelector(".textfield") as HTMLElement
    const searchCancelEl = headerEl.querySelector(".search-canceler") as HTMLElement

    searchTextFieldEl.addEventListener("click", () => {
      headerEl.classList.add("searching--mobile")
      const searchInputEl = headerEl.querySelector("input") as HTMLInputElement
      searchInputEl.focus()
    })

    searchCancelEl.addEventListener("click", () => {
      headerEl.classList.remove("searching--mobile")
    })
  }
  private setupResizeEvent() {
    const headerEl = this.el as HTMLElement
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 740) {
        headerEl.classList.remove("searching")
      } else {
        headerEl.classList.remove("searching--mobile")
      }
    })
  }
}
