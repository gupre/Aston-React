import { useParams } from "react-router-dom";

export function PostDetailsPage() {
  const { id } = useParams();

  return <div>Пост #{id}</div>;
}
