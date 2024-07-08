import React, { useRef } from "react";
import video from "../../assets/video.mp4";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoPlay, setVideoPlay }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setVideoPlay(false);
    }
  };
  return (
    <div
      ref={player}
      onClick={closePlayer}
      className={`video-player ${videoPlay ? "" : "hide"}`}
    >
      <video autoPlay muted controls src={video}></video>
    </div>
  );
};

export default VideoPlayer;
