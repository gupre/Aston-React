import { memo, useCallback, useState } from "react";
import type { CommentType } from "../../../entities/comment/types/Comment";
import { Comment } from "../../../entities/comment/ui/Comment";
import styles from "./CommentList.module.css"

interface ICommentList {
    comments: CommentType[];
}

export const CommentList = memo(({ comments }: ICommentList) => {
  const [isCommentsOpen, setCommentsOpen] = useState(false);

  const toggleReplies = useCallback(
    () => setCommentsOpen(prev => !prev),
    []
  );

  return (
    <div className={styles.commentList}>
      <div className={styles.top}>
        <h4 className={styles.title}>Комментарии</h4>

        <button
            className={styles.toggleButton}
            onClick={toggleReplies}
        >
            {isCommentsOpen ? 'Скрыть' : 'Показать'}
        </button>
      </div>

      {isCommentsOpen && (
        <div className={styles.comments}>
            {comments.length > 0 ?  
                comments.map(comment => (<Comment key={comment.id} comment={comment} />)) 
                : <div>Отсутсвуют</div>}
        </div>
      )}
    </div>
  );
});
