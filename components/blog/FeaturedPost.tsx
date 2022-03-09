import Link from "next/link"
import { FC } from "react"
import { urlFor } from "../../sanity"
import { Post } from "../../typings"

interface Props {
    post: Post
}


const FeaturedPost: FC<Props> = ({post}) => {
    const body = (post.body[0] as any).children[0].text
    return (
        <div className="featured-post">
            <img src={urlFor(post.mainImage).url()!} className="featured-post-image"/>
            <div className="featured-post-details">
                <h2 className="featured-post-title">{post.title}</h2>
                <p className="featured-post-body">{body}</p>
                <Link href={`/post/${post.slug.current}`}>
                    <a className="featured-post-link">Continue Reading</a>
                </Link>
            </div>
            
        </div>
    )
}

export default FeaturedPost