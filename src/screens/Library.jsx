import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import "../styles/library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export const Library = () => {
  const [playlists, setPlaylist] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      const items = response.data.items;
      setPlaylist(items);
      console.log(playlists);
    });
  }, []);
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((song) => (
          <div className="play-list-card" key={song.name}>
            <img
              src={song.images[0].url}
              alt="playlist-img"
              className="playlist-img"
            />
            <p className="playlist-title">{song.name}</p>
            <p className="playlist-subtitle">{song.tracks.total} songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#e99d72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
