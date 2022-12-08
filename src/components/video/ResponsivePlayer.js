import React from 'react';
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({ videoLink }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=Rq5SEhs9lws'
                width='100%'
                height='100%'>
            </ReactPlayer>
        </div >
    );
};

export default ResponsivePlayer;