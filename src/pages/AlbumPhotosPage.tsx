import { useParams } from "react-router-dom";


export function AlbumPhotosPage() {
    const {id} = useParams()
  return (
    <>
      <h1>Альбомы {id}</h1>
    </>
  );
}
