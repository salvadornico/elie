import gql from "graphql-tag"

export namespace Queries {
	export const allPosts = gql`
		{
			allPosts(orderBy: dateAndTime_ASC) {
				slug
				title
				createdAt
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
