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

	export const getPost = (slug: string) => gql`
		{
			Post(slug: ${slug}) {
				title
				createdAt
				content
				coverImage {
					url
					caption
				}
			}
		}
	`
}
