import Vue from "vue"
import PieButton from "./Button"
import PieBanner from "./Banner"

const Components = {
  PieButton,
  PieBanner
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
