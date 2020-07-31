
import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";;

function VideoSidebar() {
    const [linked, setLiked] = useState(false);

    return (
        <div className="videoSidebar ">
            <div className="videoSideBar__button">
                <FavoriteIcon />
                <p>300</p>
            </div>
            <div className="videoSideBar__button">
                <MessageIcon />
                <p></p>
            </div>
            <div className="videoSideBar__button">
                <ShareIcon />
                <p>130</p>
            </div>
        </div>
    )
}

export default VideoSidebar
