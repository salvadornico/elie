import { Post } from "@/models/post.model"

export class Category {
	name: string
	slug: string
	posts: Post[]
}
