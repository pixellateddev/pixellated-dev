export interface Post {
    _id: string
    _createdAt: string
    title: string
    description: string
    featured: boolean
    mainImage: {
        asset: {
            url: string
        }
    }
    slug: {
        current: string
    }
    body: Object[]
    // comments: Comment[]
}

export interface Comment {
    _id: string
    _createdAt: string
    name: string
    email: string
    comment: string
    approved: boolean
}