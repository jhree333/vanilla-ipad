import { Component } from "../core"
import "./Footer.css"
import navigations from "../data/navigations"

export default class Footer extends Component {
  constructor() {
    super({ tagName: "footer" })
  }
  render() {
    const container = document.createElement("div")
    container.className = "inner"

    container.innerHTML = /*html*/ `
      <div class="buy-info">
        <div>
          <img class="icon" src="./images/buy-info-box.svg" alt="무료 익일 배송 Icon" />
          <h3>업무일 기준 무료 익일 배송</h3>
          <p>
            오후 3시 이전에 주문된<br />
            재고 보유 제품에 한합니다.
          </p>
          <a href="javascript:void(0)" class="link">더 알아보기</a>
        </div>
        <div>
          <img class="icon" src="./images/buy-info-won.svg" alt="금융 혜택 Icon" />
          <h3>금융 혜택</h3>
          <p>
            무이자 할부를 통해 Apple 제품을<br />
            부담 없이 구매하실 수 있습니다.
          </p>
          <a href="javascript:void(0)" class="link">더 알아보기</a>
        </div>
        <div>
          <img class="icon" src="./images/buy-info-engrave.svg" alt="각인 Icon" />
          <h3>진정 자신만의 것으로</h3>
          <p>
            자신의 이름이나 개성 있는 문구를<br />
            iPad에 무료로 각인할 수 있습니다.
          </p>
          <a href="javascript:void(0)" class="link">더 알아보기</a>
        </div>
      </div>

      <div class="warning">
        <ul>
          <li id="footnote*">
            * 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해
            제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상
            판매 금액은 보상 판매되는 iPad의 상태 및 모델에 따라 달라집니다. 19세 이상이어야
            합니다. 일부 매장에서는 본 프로그램을 이용할 수 없으며, 일부 기기는 보상 판매 대상이
            아닙니다. Apple은 어떤 보상 판매도 거래를 거부하거나, 제한할 귄리를 보유합니다. 새
            Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 추가 약관은
            apple.com/kr/trade-in을 참고하십시오.
          </li>
        </ul>
        <ol>
          <li id="footnote1">
            배터리 사용 시간은 사용 패턴 및 설정에 따라 다를 수 있습니다. 자세한 내용은
            apple.com/kr/batteries를 참고하십시오.
          </li>
          <li id="footnote2">
            직사각형 기준으로 측정했을 때, iPad 화면은 대각선 길이 기준 25.91cm입니다.
          </li>
          <li id="footnote3">
            데이터 요금제에 가입해야 합니다. Gigabit급 LTE는 일부 국가에서 일부 이동통신사를 통해
            사용 가능합니다. 속도는 이론적 처리량에 근거한 수치이며 장소 및 이동통신사에 따라 다를
            수 있습니다. LTE 지원에 대한 자세한 내용은 이동통신사에 문의하거나
            apple.com/kr/ipad/cellular를 참고하십시오.
          </li>
          <li id="footnote4">Apple Pencil(1세대) 및 Smart Keyboard는 별도로 판매됩니다.</li>
        </ol>
        <ul>
          <li>
            앱은 App Store에서 다운로드할 수 있습니다. 각 앱의 출시 여부는 변경될 수 있습니다.
          </li>
          <li>AirPods(2세대) 무선 충전 케이스 모델 및 액세서리는 별도로 판매됩니다.</li>
        </ul>
      </div>

      <div class="breadcrumbs">
        <a href="javascript:void(0)" class="apple-logo bgtext"
          ><span class="visually-hidden">Apple</span></a
        >
        <a href="javascript:void(0)">iPad</a>
        <a href="javascript:void(0)">iPad 10.2</a>
      </div>

      <div class="navigations">
        <!-- Insert via JS -->
      </div>

      <div class="how-to-shop">
        다양한 쇼핑 방법:
        <a href="javascript:void(0)">Apple Store</a>를 방문하거나,
        <a href="javascript:void(0)">리셀러</a>를 찾아보거나, 080-330-8877번으로 전화하세요.
      </div>
      <div class="legal">
        <div class="copyright">
          Copyright ©
          <span class="this-year"></span>
          Apple Inc. 모든 권리 보유.
        </div>
        <ul>
          <li><a href="javascript:void(0)">개인정보 처리방침</a></li>
          <li><a href="javascript:void(0)">웹 사이트 이용 약관</a></li>
          <li><a href="javascript:void(0)">판매 및 환불</a></li>
          <li><a href="javascript:void(0)">법적 고지</a></li>
          <li><a href="javascript:void(0)">사이트 맵</a></li>
        </ul>
        <div class="locale">대한민국</div>
      </div>
    `
    this.el.append(container)
    this.renderNavigations() // 내비게이션 맵 렌더링
    this.renderCurrentYear() // 올해 연도 적용
    this.setupAccordion() // 내비게이션 맵 아코디언 설정
  }
  // 내비게이션 맵 렌더링 메소드
  private renderNavigations() {
    const navigationsEl = this.el.querySelector("footer .navigations")
    if (navigationsEl) {
      navigations.forEach((nav) => {
        const mapEl = document.createElement("div")
        mapEl.classList.add("map")

        let mapList = ""
        nav.maps.forEach((map) => {
          mapList += /* html */ `<li>
          <a href="${map.url}">${map.name}</a>
        </li>`
        })

        mapEl.innerHTML = /* html */ `
        <h3>
          <span class="text">${nav.title}</span>
          <span class="icon">+</span>
        </h3>
        <ul>
          ${mapList}
        </ul>
      `

        navigationsEl.append(mapEl)
      })
    }
  }

  // 올해 연도를 적용하는 메소드
  private renderCurrentYear() {
    const thisYearEl = this.el.querySelector(".this-year")
    if (thisYearEl) {
      thisYearEl.textContent = `${new Date().getFullYear()}`
    }
  }

  // 내비게이션 맵 아코디언 메소드
  private setupAccordion() {
    const mapEls = [...this.el.querySelectorAll("footer .navigations .map")]
    mapEls.forEach((el) => {
      const h3El = el.querySelector("h3")
      if (h3El) {
        h3El.addEventListener("click", () => {
          el.classList.toggle("active")
        })
      }
    })
  }
}
