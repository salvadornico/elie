import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Buefy from "buefy"
import VueScrollTo from "vue-scrollto"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import VueApollo from "vue-apollo"

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
