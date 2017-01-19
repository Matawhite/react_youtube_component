import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
  return(
    <ul className="col-md-4 list-group">
      <VideoItem />
    </ul>
  );
}

export default VideoList
