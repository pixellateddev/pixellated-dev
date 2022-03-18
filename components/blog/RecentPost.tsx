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

const RecentPost: FC<Props> = ({post}) => {
    const body = (post.body[0] as any).children[0].text.split(' ').slice(0, 50).join(' ') + '...';
    return (
        <Paper className={styles.recentPost}>
            <h2 className={styles.recentPostTitle}>{post.title}</h2>
            <p className={styles.recentPostBody}>{body}</p>
            <img src={urlFor(post.mainImage).url()!} alt={post.title} className={styles.recentPostImage}/>
            <p className={cx('caption', styles.recentPostDate)}>{toDate(post._createdAt)}</p>
            <Link href={`/blog/${post.slug.current}`}>
                <a className={styles.recentPostLink}>Continue Reading</a>    
            </Link>

        </Paper>

    )
}

export default RecentPost