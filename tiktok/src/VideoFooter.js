import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
export default function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@bharathza</h3>
        <p>some kind of description</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="videoFooterIcon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <div>
                <p>lalala song lala</p>
              </div>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooterRecorder"
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
}
