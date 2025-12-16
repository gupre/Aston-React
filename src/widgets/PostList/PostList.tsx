import type { PostCardType } from "../../entities/post/types/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from './PostList.module.css'

interface IPostListProps {
  posts: PostCardType[]
}

export function PostList({posts}: IPostListProps) {

    return (
        <div className={styles.postList}>
         {posts.map((post) => <PostCard key={post.id} post={post}></PostCard>)}
        </div>
    )
}