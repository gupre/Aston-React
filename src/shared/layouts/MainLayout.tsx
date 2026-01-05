import { useState } from "react";
import { PostList } from "../../widgets/PostList/PostList";
import { withLoading } from "../lib/hoc/withLoading";
import styles from './MainLayout.module.css'

export function MainLayot() {
    const posts = [{id: 1, title: "Пост 1"}, {id: 2, title: "Пост 2"}, 
        {id: 3, title: "Пост 3"}, {id: 4, title: "Пост 4"}, 
        {id: 5, title: "Пост 5"}, {id: 6, title: "Пост 6"}, 
        {id: 7, title: "Пост 7"}, {id: 8, title: "Пост 8"}, 
        {id: 9, title: "Пост 9"}, {id: 10, title: "Пост 10"}]
        
    const PostListWithLoading = withLoading(PostList);
    const [isLoading, setLoading] = useState(true)

    setTimeout(() => setLoading(false), 2000)
    return (
        <div className={styles.container}>
            <PostListWithLoading isLoading={isLoading} posts={posts} />
        </div>
    )
}       