import gql from "graphql-tag"

export namespace Queries {
	export const allPosts = gql`
		{
			allPosts {
				id
				title
				dateAndTime
			}
		}
	`

	export const getPost = (id: string) => gql`
		{
			Post(id: ${id}) {
				content
			}
		}
	`
}
