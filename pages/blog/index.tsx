import { NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'

import { FeaturedPost } from '@pixellated/components/blog'
import RecentPost from '@pixellated/components/blog/RecentPost'
import { sanityClient } from '@pixellated/sanity'
import styles from '@pixellated/styles/blog.module.scss'
import { Post } from '@pixellated/typings'

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
                <div className={styles.blog}>
                    <div className="layout">
                        <div className="main-content">
                            <FeaturedPost post={featuredPost}/>    
                            <hr className="seperator"/>
                            <div className={styles.recentPostList}>
                                {posts.map(post => (
                                    <RecentPost key={post._id} post={post}/>
                                ))}
                            </div>
                        </div>
                        <div className="sidebar"></div>
                    </div>
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