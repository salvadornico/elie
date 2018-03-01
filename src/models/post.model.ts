import { Asset } from "@/models/asset.model"
import { Category } from "@/models/category.model"
import { Tag } from "@/models/tag.model"

export class Post {
	id: string
	title: string
	slug: string
	featured: boolean
	content: string
	coverImage: Asset
	category: Category
	tags: Tag[]
	createdAt: Date
	updatedAt: Date
}
