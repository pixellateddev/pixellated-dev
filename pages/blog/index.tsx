import { NextPage } from "next"
import { groq } from "next-sanity"
import Head from "next/head"
import { FeaturedPost } from "../../components/blog"
import RecentPost from "../../components/blog/RecentPost"
import { sanityClient } from "../../sanity"
import { Post } from "../../typings"

interface Props {
    featuredPost: Post,
    posts: Post[]
}

const Blog: NextPage<Props> = ({featuredPost, posts }) => {
    return (
        <>
            <Head>
                <title>Blog | Pixellateddev</title>
            </Head>
            <main className="container">
                <div className="layout">
                    <div className="main-content blog">
                        <FeaturedPost post={featuredPost}/>    
                        <hr className="seperator"/>
                        <div className="recent-post-list">
                            {posts.map(post => (
                                <RecentPost key={post._id} post={post}/>
                            ))}
                        </div>
                    </div>
                    <div className="sidebar"></div>
                </div>
            </main>
        </>
    )
}

export default Blog

export const getServerSideProps = async () => {
    const query = groq`*[_type == "post"] {
        _id,
        _createdAt,
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