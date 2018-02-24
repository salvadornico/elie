import gql from "graphql-tag"

export namespace Queries {
	export const allPosts = gql`
		{
			allPosts {
				id
				title
			}
		}
	`
}
