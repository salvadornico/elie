import gql from "graphql-tag"

export namespace Queries {
	export const allPosts = gql`
		{
			allPosts(orderBy: dateAndTime_DESC) {
				slug
				title
				dateAndTime
				coverImage {
					url
				}
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
