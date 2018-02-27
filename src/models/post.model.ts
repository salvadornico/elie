import { Asset } from "@/models/asset.model"

export class Post {
	id: string
	title: string
	slug: string
	featured: boolean
	content: string
	coverImage: Asset
	tags: string[]
	createdAt: Date
	updatedAt: Date
}
