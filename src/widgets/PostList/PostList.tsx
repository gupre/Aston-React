import { useCallback, useMemo, useState } from "react";
import type { PostCardType } from "../../entities/post/types/PostCard";
import { PostCard } from "../../entities/post/ui/PostCard";
import { PostLenghtFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import styles from './PostList.module.css'
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

interface IPostListProps {
  posts: PostCardType[]
}

export function PostList({posts}: IPostListProps) {
    const [lengthFilter, setLengthFilter] = useState(0)
    
    const filterPosts = useMemo(() => {
      return filterByLength(posts, lengthFilter);
    }, [posts, lengthFilter]);

    const handleChange = useCallback((value: number) => {
      setLengthFilter(value);
    }, []);

    return (
      <div className={styles.container}>
        <PostLenghtFilter value={lengthFilter} onChange={handleChange}></PostLenghtFilter>
        <div className={styles.postList}>
         {/* {filterPosts.map((post) => <PostCard key={post.id} post={post}></PostCard>)} */}
         <ItemList
            items={filterPosts}
            keyExtractor={(post) => post.id}
            renderItem={(post) => <PostCard post={post} />}
          />
        </div>
      </div>
    )
}