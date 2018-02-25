import gql from "graphql-tag"

const formatOptions = (options: {}): string => {
	let optionsString = ""
	let props = Object.entries(options)
	if (props.length > 0) {
		optionsString += ", filter: {"
		let counter = 0
		props.forEach(prop => {
			optionsString += counter === 0 ? "" : ", "
			optionsString += `${prop[0]}: ${prop[1]}`
			counter++
		})
		optionsString += "}"
	}
	return optionsString
}

export namespace Queries {
	export const getPosts = (options: {}) => gql`
		{
			allPosts(orderBy: dateAndTime_ASC${formatOptions(options)}) {
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
