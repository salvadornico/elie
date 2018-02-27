import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { GRAPHCMS_API_URL } from "./../../config/config"

export default new ApolloClient({
	link: new HttpLink({ uri: GRAPHCMS_API_URL }),
	cache: new InMemoryCache(),
})
