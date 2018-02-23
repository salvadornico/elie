import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueScrollTo from "vue-scrollto"
import Buefy from "buefy"

Vue.use(Buefy, {
	defaultIconPack: "fas",
})
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
