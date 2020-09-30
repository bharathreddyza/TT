import React from "react";
import "./App.css";
import Video from "./Video";
function App() {
  return (
    <div className="App">
      <div className="app-videos">
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
      </div>
    </div>
  );
}

export default App;
