import React from 'react'

import ReactPlayer from 'react-player';
function VideoPlayer({URL}) {
 
    return (
            
            <ReactPlayer controls url={URL} />
            
    )
}

export default VideoPlayer 
