import { Post } from "@/models/post.model"

export class Tag {
	name: string
	slug: string
	posts: Post[]
}
