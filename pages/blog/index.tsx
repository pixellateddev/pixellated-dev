import { NextPage } from "next"
import { groq } from "next-sanity"
import { FeaturedPost } from "../../components/blog"
import { sanityClient } from "../../sanity"
import { Post } from "../../typings"

interface Props {
    featuredPost: Post,
    posts: Post[]
}

const Blog: NextPage<Props> = ({featuredPost}) => {
    return (
        <main className="container">
            <div className="layout">
                <div className="main-content">
                    <FeaturedPost post={featuredPost}/>    
                </div>
                <div className="sidebar">World</div>
            </div>
        </main>
    )
}

export default Blog

export const getServerSideProps = async () => {
    const query = groq`*[_type == "post"] {
        _id,
        title,
        slug,
        body,
        description,
        featured,
        mainImage
        }`

    const result = await sanityClient.fetch(query)
    const posts: Post[] = []
    const featuredPost: Post[] = []

    result.forEach((post: Post) => {
        if (post.featured) {
        featuredPost.push(post)
        }
        else {
        posts.push(post)
        }
    })

    return {
        props: {
            featuredPost: featuredPost[0],
            posts
        }
    }
}