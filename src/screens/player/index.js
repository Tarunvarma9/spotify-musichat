import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import Widgets from "../../components/widgets";
import { Spotify } from "react-spotify-embed";

export default function Player() {
  const location = useLocation();

  const handleError =()=>{
    localStorage.removeItem("token")
      window.location.reload()
  }


  return (
    <div className="screen-container flex">
      {location.state.id ?(
          <iframe
            title="Spotify Embed"
            src={`https://open.spotify.com/embed/playlist/${location.state.id}?utm_source=generator&theme=1`}
            width="100%"
            height="100%"
            style={{ minHeight: '360px', border:0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
      ):(<>{handleError}
      </>)
    }
    </div>
  );
}
