import { GetStaticProps, NextPage } from "next"
import { groq } from "next-sanity"
import { sanityClient, urlFor } from "../../sanity"
import PortableText from 'react-portable-text'

import { Post } from "../../typings"
import Head from "next/head"
import { toDate } from "../../utils"

interface Props {
    post: Post
}

const PostPage: NextPage<Props> = ({post}) => {
    return (
        <>
            <Head>
                <title>{post.title} | Pixellateddev</title>
            </Head>
            <main className="container">
                <div className="layout">
                    <div className="main-content post">
                    <h2 className="post-title">{post.title}</h2>
                    <img src={urlFor(post.mainImage).url()!} className="post-main-image"/>
                    <PortableText 
                        content={post.body}
                        serializers={{
                            h3: (props: any) => <h3 className="post-body-h3" {...props} />
                        }}
                    />
                    <p className="caption post-date">{toDate(post._createdAt)}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PostPage


export const getStaticPaths = async () => {
    const query = groq`
    *[_type == "post"] {
        _id,
        slug {
          current
        }
      }
    `

    const posts: Post[] = await sanityClient.fetch(query)
    const paths = posts.map(post => ({
        params: {
            post: post.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        _id,
        _createdAt,
        title,
        description,
        mainImage,
        slug,
        body,
        // 'comments': *[
        //     _type == "comment"
        //   && post._ref == ^._id
        //   && approved == true
        // ]
    }
    `


    const post = await sanityClient.fetch(query, {
        slug: params?.post
    })

    if (!post._id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        }
    }
}