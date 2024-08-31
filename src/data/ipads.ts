// 개별 iPad 객체의 타입 정의
interface Ipad {
  thumbnail: string // 썸네일 이미지 경로
  colors: string[] // 색상 배열
  name: string // 제품 이름
  tagline: string // 제품 태그라인 (HTML 문자열 포함 가능)
  price: number // 가격 (숫자 타입)
  url: string // 제품 상세 URL
}

// iPads 배열의 타입 정의
type Ipads = Ipad[]

const ipads: Ipads = [
  {
    thumbnail: "./images/compare_ipad_pro.png",
    colors: ["#68696D", "#E2E3E5"],
    name: "iPad Pro",
    tagline: "궁극의 iPad란<br />이런 것.",
    price: 999000,
    url: "/ipad-pro/",
  },
  {
    thumbnail: "./images/compare_ipad_air.png",
    colors: ["#68696D", "#E2E3E5", "#E8D2CE", "#B9B8D1", "#88AEBF"],
    name: "iPad Air",
    tagline: "강력하다. 다채롭다.<br />경이롭다.",
    price: 779000,
    url: "/ipad-air/",
  },
  {
    thumbnail: "./images/compare_ipad_10_2.png",
    colors: ["#68696D", "#E2E3E5"],
    name: "iPad",
    tagline: "만족스러운 성능.<br />기분 좋은 가격.",
    price: 449000,
    url: "/ipad-10.2/",
  },
  {
    thumbnail: "./images/compare_ipad_mini.png",
    colors: ["#68696D", "#E2E3E5", "#E8D2CE", "#B9B8D1"],
    name: "iPad Pro",
    tagline: "메가급 성능.<br />크기만 미니.",
    price: 649000,
    url: "/ipad-mini/",
  },
]

export default ipads
