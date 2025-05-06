import React from 'react';

const YouTubeEmbed = ({ videoId, caption }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      ></iframe>
    </div>
    {caption && <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>{caption}</p>}
  </div>
);

export default YouTubeEmbed;
