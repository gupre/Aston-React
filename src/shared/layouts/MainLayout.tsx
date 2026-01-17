import { useGetPostsQuery } from "../../entities/[entity]/api/postsApi";
import { PostList } from "../../widgets/PostList/PostList";
import { withLoading } from "../lib/hoc/withLoading";
import styles from './MainLayout.module.css'
// import { usePosts } from "../../features/PostList/model/hooks/usePosts";

export function MainLayot() {
    // const { posts, isLoading } = usePosts();
    
    const { data: posts, isLoading, error } = useGetPostsQuery();

    if (error) return <div>Ошибка загрузки постов</div>;

    const PostListWithLoading = withLoading(PostList);

    return (
        <div className={styles.container}>
            <PostListWithLoading isLoading={isLoading} posts={posts ?? []} />
        </div>
    )
}       