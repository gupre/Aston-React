import { useParams } from "react-router-dom";
import { UserTabs } from "../widgets/UserTabs/UserTabs";

export function UserPostsPage() {
  const {id} = useParams()
  return (
    <>
      <UserTabs />
      <h1>Посты пользователя {id}</h1>
    </>
  );
}
