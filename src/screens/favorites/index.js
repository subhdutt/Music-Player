// import React from 'react'

// export default function Favorites() {
//   return (
//     <div className='screen-container'>Favorites</div>
//   )
// }


import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import "./favorites.css";

export default function Library() {
  const [likedSongs, setLikedSongs] = useState(null);

  useEffect(() => {
    APIKit.get("me/tracks").then(function (response) {
      setLikedSongs(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {likedSongs?.map((track) => (
          <div className="track-card" key={track.track.id}>
            <img
              src={track.track.album.images[0].url}
              className="track-image"
              alt="Track-Art"
            />
            <p className="track-title">{track.track.name}</p>
            <p className="track-artist">
              {track.track.artists.map((artist) => artist.name).join(", ")}
            </p>
            <p className="track-album">{track.track.album.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
