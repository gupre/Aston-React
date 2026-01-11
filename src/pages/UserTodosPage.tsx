import { useParams } from "react-router-dom";
import { UserTabs } from "../widgets/UserTabs/UserTabs";

export function UserTodosPage() {
  const {id} = useParams()
  return (
    <>
      <UserTabs />
      <h1>Задачи пользователя {id}</h1>
    </>
  );
}
