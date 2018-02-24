import { MetaInfo } from "vue-meta"
import { ApolloProperty } from "vue-apollo/types/vue-apollo"

declare module "vue/types/vue" {
	interface Vue {
		metaInfo?: MetaInfo | (() => MetaInfo)
		$apollo: ApolloProperty<any>
		apollo?: object
	}
}
