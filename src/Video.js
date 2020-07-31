import React, { useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter'

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef =  useRef(null);
       
    const onVideoPress = () => {
		if(playing){
			videoRef.current.pause();
			setPlaying(false);
		}else{
        videoRef.current.play();
		setPlaying(true);			
		}
    }

    return (
        <div className="video">
            <video className="video__player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/25c950943373e7f3f552908cca6cfc26/5f2463ac/video/tos/useast2a/tos-useast2a-ve-0068c001/3a642b10eca14726a01136c333fef153/?a=1233&amp;br=968&amp;bt=484&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200731123157010190209084331EEE5F&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=MzdlM3E4aHlrdjMzNTczM0ApOWQ5Mzk8aTxpNzU7ZmU3M2c1c20uYzIyZmBfLS1gMTZzc2E1Xi4zXi1hLjNiMDAyMWI6Yw%3D%3D&amp;vl=&amp;vr=">    </video>
            <VideoFooter/>
			{/*<VideoFooter/>*/}
            {/*<VideoSidebar/>*/}

        </div>
    )
}

export default Video
