// import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

// YOUR_GRAPH_QL_ENDPOINT_HERE

// const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cj3xgn6d2idze0104n3mpq4le', {
// 	reconnect: true,
// });

// const networkInterface = createNetworkInterface({
// 	uri: ''
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
// 	networkInterface,
// 	wsClient
// )

export default new ApolloClient({
	link: new HttpLink({ uri: "https://api.graphcms.com/simple/v1/elieblog" }),
	cache: new InMemoryCache(),
})
