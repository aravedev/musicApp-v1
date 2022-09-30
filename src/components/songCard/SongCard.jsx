import "../../styles/SongCard.css";
import { AlbumImage } from "./AlbumImage";
import { AlbumInfo } from "./AlbumInfo";

export const SongCard = ({ album }) => {
  return (
    <div className="songcard-body flex">
      <AlbumImage url={album?.images[0]?.url}></AlbumImage>
      <AlbumInfo album={album}></AlbumInfo>
    </div>
  );
};
