import { Component } from "./core"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

export default class App extends Component {
  render() {
    const theHeader = new Header().el
    const theNav = new Nav().el
    const theFooter = new Footer().el
    const routerView = document.createElement("router-view")
    this.el.append(theHeader, theNav, routerView, theFooter)
  }
}
