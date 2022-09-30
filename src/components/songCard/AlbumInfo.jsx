import "../../styles/AlbumInfo.css";

export const AlbumInfo = ({ album }) => {
  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.artists[0]?.name}</p>
        </div>
      </div>
      <div className="album-info">
        <p>{`${album?.name} is a ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album-release">
        <p>{`Release date: ${album?.release_date}`}</p>
      </div>
    </div>
  );
};
