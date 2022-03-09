import Link from "next/link"
import { FC } from "react"
import { urlFor } from "../../sanity"
import { Post } from "../../typings"
import { toDate } from "../../utils"

interface Props {
    post: Post
}


const FeaturedPost: FC<Props> = ({post}) => {
    const body = (post.body[0] as any).children[0].text.split(' ').slice(0, 50).join(' ') + '...';
    return (
        <div className="featured-post">
            <div className="featured-post-details">
                <h2 className="featured-post-title">{post.title}</h2>
                <p className="caption featured-post-date">{toDate(post._createdAt)}</p>
                <p className="featured-post-body">{body}</p>
                <Link href={`/post/${post.slug.current}`}>
                    <a className="featured-post-link">Continue Reading</a>
                </Link>
            </div>
            <img src={urlFor(post.mainImage).url()!} className="featured-post-image"/>
        </div>
    )
}

export default FeaturedPost