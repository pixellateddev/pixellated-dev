import cx from 'classnames'
import { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import PortableText from 'react-portable-text'

import { Paper } from '@mui/material'
import { sanityClient, urlFor } from '@pixellated/sanity'
import styles from '@pixellated/styles/blog.module.scss'
import { Post } from '@pixellated/typings'
import { toDate } from '@pixellated/utils'

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
                    <div className="main-content">
                    <Paper className={styles.post}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <img src={urlFor(post.mainImage).url()!} alt={post.title} className={styles.postMainImage}/>
                        <PortableText
                            content={post.body}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            dataset={process.env.NEXT_PUBILC_SANITY_DATASET}
                            serializers={{
                                h3: (props: any) => <h3 className={styles.postBodyH3} {...props} />
                            }}
                        />
                        <p className={cx('caption', styles.postDate)}>{toDate(post._createdAt)}</p>
                    </Paper>
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
        body[]{
            ..., 
            asset->{
                ...,
                "_key": _id
            }
        },
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