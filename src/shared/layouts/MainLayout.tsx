import { PostList } from "../../widgets/PostList/PostList";
import styles from './MainLayout.module.css'

export function MainLayot() {
    const posts = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}]
    return (
        <div className={styles.container}>
            <PostList posts={posts}></PostList>
        </div>
    )
}