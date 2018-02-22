import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import fontawesome from "@fortawesome/fontawesome"
import brands from "@fortawesome/fontawesome-free-brands"
import VueScrollTo from "vue-scrollto"

Vue.use(VueScrollTo)

fontawesome.library.add(brands)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
