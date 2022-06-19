// @ts-ignore
import VideoPlayer from 'react-background-video-player';

import { StyledPageHome } from './styles';

export const PageHome: React.FC = () => {
    const videoList = ['/videos/intro-video2.mp4', '/videos/intro-video1.mp4'];
    const randVideo = videoList[Math.floor(Math.random() * videoList.length)];
    return (
        <StyledPageHome className='__page_home_container w-screen h-screen  dark:bg-gray-700 relative'>
            <VideoPlayer className='video_bg' src={randVideo} autoPlay={true} muted={true} />
            <div>
                <h4 className='text-header'>Xin chao be le zan dat</h4>
            </div>
        </StyledPageHome>
    );
};
