import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from  "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@shelbypoton</h3>
				<p>this works.</p>
				<MusicNoteIcon/>
                <Ticker mode="smooth">
                    {({index}) =>(
					<>
					<h1>Testing marque</h1>
					</>
					)}
                </Ticker>
            </div>
			<img className="videoFooter_record" src="http://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    )
}

export default VideoFooter
