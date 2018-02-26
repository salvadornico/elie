import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Buefy from "buefy"
import VueScrollTo from "vue-scrollto"
import VueMarkdown from "vue-markdown"

Vue.use(Buefy, {
	defaultIconPack: "fas",
})
Vue.use(VueScrollTo)
Vue.use(VueMarkdown)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
