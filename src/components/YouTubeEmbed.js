// import React from 'react';

// const YouTubeEmbed = ({ videoId, caption }) => (
//   <div style={{ textAlign: "center" }}>
//     <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
//       <iframe
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         allowFullScreen
//         style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
//       ></iframe>
//     </div>
//     {caption && <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>{caption}</p>}
//   </div>
// );

// export default YouTubeEmbed;

import React from 'react';

export default function YouTubeEmbed({ videoId, caption }) {
  // Detect current domain (used for the origin param)
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://guide.intrepidcs.com';

  return (
    <div style={{ maxWidth: '100%', marginBottom: '2rem' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?origin=${origin}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      {caption && (
        <div
          style={{
            textAlign: 'center',
            marginTop: '0.5rem',
            fontStyle: 'italic',
            color: '#666',
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
