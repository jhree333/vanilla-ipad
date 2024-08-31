import App from "./App"
import router from "./routes"
import "./main.css"

const app = document.querySelector("#app")
app?.append(new App().el)

// 루트 요소를 등록한 후에 실행해야 하는 플러그인!
router()
