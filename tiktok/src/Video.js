import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, channel, description, song, likes, shares, comments }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if video is playing -> stop
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        muted
        loop
        ref={videoRef}
        className="video-player"
        src={url}
      />

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} comments={comments} />
    </div>
  );
}

export default Video;
