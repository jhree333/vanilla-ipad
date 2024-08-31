import { Component } from "../core"
import { createIntersectionObserver, observeElements } from "../utils/intersectionObserver"
import "./Camera.css"

export default class Camera extends Component {
  constructor() {
    super({ tagName: "section" })
  }
  render() {
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("camera")
      this.el.innerHTML = /*html*/ `
        <div class="inner">
          <div class="stage">
            <h1 class="bgtext">
              <span class="visually-hidden">촬영에서 편집 공유까지 한 기기에서.</span>
            </h1>
            <div class="info">
              <div class="icon icon--center-stage"></div>
              <p>
                센터 스테이지 기술이 영상 통화 시 당신이 언제나 화면 중앙에 있도록 자동으로 카메라를
                조정해 줍니다. 덕분에 서로에게 더 집중할 수 있게 되죠. SNS에 올릴 재미난 동영상을
                만들 때도 요긴하답니다.
              </p>
            </div>
            <div class="figures">
              <figure>
                <img
                  src="./images/camera_hardware.png"
                  alt="iPad의 영상 통화 중 센터 스테이지 기능이 사용되는 예시"
                />
                <div class="video-wrap">
                  <video src="./videos/center-stage.mp4" muted autoplay loop></video>
                  <div class="controller--play hide">
                    재생 <img src="./images/video-play.svg" alt="Play" />
                  </div>
                  <div class="controller--pause">
                    일시정지 <img src="./images/video-pause.svg" alt="Pause" />
                  </div>
                </div>
                <figcaption class="bgtext">
                  <span class="visually-hidden"
                    >센터 스테이지 덕분에 영상 통화도 더 자연스럽게</span
                  >
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="edit feature">
            <div class="infos infos--center">
              <div class="info">
                <div class="icon icon--front-camera"></div>
                <p>
                  12MP 울트라 와이드 전면 카메라는 센터 스테이지 기술뿐만 아니라 엄청나게 향상된
                  이미지 화질을 자랑합니다. 덕분에 더욱 훌륭한 셀카와 단체 사진도 찍을 수 있죠.
                </p>
              </div>
              <div class="info">
                <div class="icon icon--back-camera"></div>
                <p>
                  iPad 후면에 탑재된 8MP 와이드 카메라는 선명하고 또렷한 사진과 동영상을 담을 수
                  있습니다.
                </p>
              </div>
              <div class="info">
                <div class="icon icon--scan"></div>
                <p>
                  다재다능한 후면 카메라로 문서를 스캔하고 몰입감 넘치는 AR 앱을 즐길 수도 있습니다.
                </p>
              </div>
            </div>
            <div class="figures">
              <figure>
                <img src="./images/camera_edit.jpg" alt="사진 앱에서 편집되고 있는 이미지" />
                <figcaption class="bgtext">
                  <span class="visually-hidden">사진도 동영상도 찍고 편집하고</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      `
    }
    this.initIntersectionObserver()
    this.initVideoControls()
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

  private initVideoControls() {
    // 비디오 및 컨트롤 요소 선택
    const video = this.el.querySelector(".stage video") as HTMLVideoElement
    const playBtn = this.el.querySelector(".stage .controller--play") as HTMLElement
    const pauseBtn = this.el.querySelector(".stage .controller--pause") as HTMLElement

    // 버튼 클릭 이벤트 핸들러 설정
    playBtn.addEventListener("click", () => {
      video
        .play()
        .then(() => {
          playBtn.classList.add("hide")
          pauseBtn.classList.remove("hide")
        })
        .catch(() => {
          console.error("비디오 재생에 실패했습니다.")
        })
    })

    pauseBtn.addEventListener("click", () => {
      video.pause()
      playBtn.classList.remove("hide")
      pauseBtn.classList.add("hide")
    })
  }
}
