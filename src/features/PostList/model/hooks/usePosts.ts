import { useEffect, useState } from "react";
import type { PostCardType } from "../../../../entities/post/types/PostCard";

export function usePosts() {
  const [posts, setPosts] = useState<PostCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    posts,
    isLoading,
  };
}
