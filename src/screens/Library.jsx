import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import "../styles/library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export const Library = () => {
  const [playlists, setPlaylist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      const items = response.data.items;
      setPlaylist(items);
      console.log(playlists);
    });
  }, []);

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((song) => (
          <div
            className="play-list-card"
            key={song.id}
            onClick={() => playPlaylist(song.id)}
          >
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
