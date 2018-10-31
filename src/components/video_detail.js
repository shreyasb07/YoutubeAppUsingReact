import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="video">
        <iframe className="video-iframe" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoDetail;