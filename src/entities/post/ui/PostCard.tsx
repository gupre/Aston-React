import { memo } from "react"
import { CommentList } from "../../../widgets/CommentList/ui/CommentList"
import type { PostCardType } from "../types/PostCard"
import styles from './PostCard.module.css'
import { useGetCommentsByPostIdQuery } from "../../[entity]/api/commentsApi"

interface IPostCardProps {
    post: PostCardType
}

export const PostCard = memo(({post}: IPostCardProps) => {    
    // const comments = [{id: 1, text: "text 1", postId: 1}, {id: 2, text: "text 2", postId: 2}, {id: 3, text: "text 3", postId: 3},]
    const { data: comments, isLoading: commentsLoading } = useGetCommentsByPostIdQuery(post.id);

    // const postComments = useMemo(
    //     () => comments?.filter(c => c.postId === post.id),
    //     [comments, post.id]
    // );

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.card}`}>
                <h2>{post.title}</h2>
            </div>
            
            {commentsLoading ? <div>Загрузка </ div> : <CommentList comments={comments ?? []} />}
        </div>
    )
})