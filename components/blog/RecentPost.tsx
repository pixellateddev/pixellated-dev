import Link from "next/link"
import { FC } from "react"
import { urlFor } from "../../sanity"
import { Post } from "../../typings"
import { toDate } from "../../utils"

interface Props {
    post: Post
}

const RecentPost: FC<Props> = ({post}) => {
    const body = (post.body[0] as any).children[0].text.split(' ').slice(0, 50).join(' ') + '...';
    return (
        <div className="recent-post">
            <h2 className="recent-post-title">{post.title}</h2>
            <p className="recent-post-body">{body}</p>
            <img src={urlFor(post.mainImage).url()!} className="recent-post-image"/>
            <p className="caption recent-post-date">{toDate(post._createdAt)}</p>
            <Link href={`/blog/${post.slug.current}`}>
                <a className="recent-post-link">Continue Reading</a>    
            </Link>

        </div>

    )
}

export default RecentPost