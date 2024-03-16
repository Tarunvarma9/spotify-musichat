import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();



  return (
    <div className="screen-container flex">
          <iframe
  title="Spotify Embed"
  src={`https://open.spotify.com/embed/playlist/${location.state.id}?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
    </div>
  );
}