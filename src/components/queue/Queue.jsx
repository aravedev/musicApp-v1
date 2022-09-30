import React from "react";
import "../../styles/queue.css";

export const Queue = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={track?.track.id}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="trackName">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
