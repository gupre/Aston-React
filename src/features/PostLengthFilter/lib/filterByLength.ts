import type { PostCardType } from "../../../entities/post/types/PostCard";

export const filterByLength = (posts: PostCardType[], minLength: number): PostCardType[] => {
    if (!minLength) return posts;

    return posts.filter(post => post.title.length >= minLength)
}