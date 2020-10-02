import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import Axios from "axios";
import axios from "./connector";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);
  return (
    <div className="App">
      <div className="app-videos">
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              url={url}
              likes={likes}
              shares={shares}
              comments={comments}
              channel={channel}
              description={description}
              song={song}
            />
          )
        )}
        {/* <Video
          url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          likes={100}
          shares={13}
          comments={35}
          channel="bharath"
          description="bla bla bka abk"
          song="dreamer"
        />
        <Video
          url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          likes={100}
          shares={13}
          comments={35}
          channel="bharath"
          description="bla bla bka abk"
          song="dreamer"
        />
        <Video
          url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          likes={100}
          shares={13}
          comments={35}
          channel="bharath"
          description="bla bla bka abk"
          song="dreamer"
        />
        <Video
          url="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
          likes={100}
          shares={13}
          comments={35}
          channel="bharath"
          description="bla bla bka abk"
          song="dreamer"
        /> */}
      </div>
    </div>
  );
}

export default App;
