import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
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
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      />

      <VideoFooter />
      {/* {video sidebar} */}
    </div>
  );
}

export default Video;
