import type { CommentType } from "../../../entities/comment/types/Comment";
import styles from "./Comment.module.css"

interface ICommentProps {
    comment: CommentType;
}

export const Comment = ({ comment }: ICommentProps) => {
  return <div className={styles.comment}>{comment.name}</div>;
};