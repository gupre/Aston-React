import type { PostCardType } from "../types/PostCard"
import styles from './PostCard.module.css'

interface IPostCardProps {
    post: PostCardType
    //...
}

export function PostCard({post}: IPostCardProps) {
    return (
        <div className={styles.card}>Карточка {post.id} </div>
    )
}