import { useParams } from "react-router-dom";
import { UserTabs } from "../widgets/UserTabs/UserTabs";

export function UserAlbumsPage() {
  const {id} = useParams()
  return (
    <>
      <UserTabs />
      <h1>Альбомы пользователя {id}</h1>
    </>
  );
}
