import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteborderIcon from "@material-ui/icons/FavoriteBorder";
export default function VideoSidebar({ likes, shares, comments }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebarButton">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteborderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebarButton">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSidebarButton">
        <ShareIcon fontSize="large" />
        <p>{shares}}</p>
      </div>
    </div>
  );
}
