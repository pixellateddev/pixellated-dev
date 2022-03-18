import cx from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { Paper } from '@mui/material'

import { urlFor } from '../../sanity'
import styles from '../../styles/blog.module.scss'
import { Post } from '../../typings'
import { toDate } from '../../utils'

interface Props {
    post: Post
}


const FeaturedPost: FC<Props> = ({post}) => {
    const body = (post.body[0] as any).children[0].text.split(' ').slice(0, 50).join(' ') + '...';
    return (
        <Paper className={styles.featuredPost}>
            <div className={styles.featuredPostDetails}>
                <h2 className={styles.featuredPostTitle}>{post.title}</h2>
                <p className={cx('caption', styles.featuredPostDate)}>{toDate(post._createdAt)}</p>
                <p className={styles.featuredPostBody}>{body}</p>
                <Link href={`/blog/${post.slug.current}`}>
                    <a className={styles.featuredPostLink}>Continue Reading</a>
                </Link>
            </div>
            <img src={urlFor(post.mainImage).url()!} alt={post.title} className={styles.featuredPostImage}/>
        </Paper>
    )
}

export default FeaturedPost