import Accessibility from "../components/Accessibility"
import Accessories from "../components/Accessories"
import AccessoryShop from "../components/AccessoryShop"
import Apps from "../components/Apps"
import Ar from "../components/Ar"
import Camera from "../components/Camera"
import Compare from "../components/Compare"
import Display from "../components/Display"
import Environment from "../components/Environment"
import Hero from "../components/Hero"
import IpadOS from "../components/IpadOS"
import Power from "../components/Power"
import Privacy from "../components/Privacy"
import Trade from "../components/Trade"
import Wireless from "../components/Wireless"
import { Component } from "../core"

export default class Home extends Component {
  render() {
    const container = document.createElement("main")

    const theHero = new Hero().el
    const thePower = new Power().el
    const theDisplay = new Display().el
    const theCamera = new Camera().el
    const theWireless = new Wireless().el
    const theAccessories = new Accessories().el
    const theIpadOS = new IpadOS().el
    const theApps = new Apps().el
    const thePrivacy = new Privacy().el
    const theAccessibility = new Accessibility().el
    const theAr = new Ar().el
    const theEnvironment = new Environment().el
    const theAccessoryShop = new AccessoryShop().el
    const theTrade = new Trade().el
    const theCompare = new Compare().el

    container.append(
      theHero,
      thePower,
      theDisplay,
      theCamera,
      theWireless,
      theAccessories,
      theIpadOS,
      theApps,
      thePrivacy,
      theAccessibility,
      theAr,
      theEnvironment,
      theAccessoryShop,
      theTrade,
      theCompare
    )

    this.el.append(container)
  }
}
