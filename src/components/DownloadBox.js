// import React from "react";

// const DownloadBox = ({ fileName, fileSize, filePath }) => {
//   return (
//     <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "10px" }}>
//       <img src="/img/zip-icon.png" alt="ZIP Icon" width="60" />
//       <div>
//         <strong><a href={filePath} download>{fileName}</a></strong><br />
//         <small>{fileSize} • archive</small>
//       </div>
//     </div>
//   );
// };

// export default DownloadBox;


// import React from "react";

// // Define icons for different file types
// const fileIcons = {
//   zip: ".././img/zip-icon.png",
//   py: "/img/py-icon.png",
//   txt: "/img/txt-icon.png",
//   pdf: "/img/pdf-icon.png",
//   docx: "/img/docx-icon.png",
//   default: "/img/default-icon.png", // Fallback icon
// };

// // Function to get file extension
// const getFileExtension = (fileName) => {
//   return fileName.split(".").pop().toLowerCase();
// };

// const DownloadBox = ({ fileName, fileSize, filePath }) => {
//   const fileExt = getFileExtension(fileName);
//   const icon = fileIcons[fileExt] || fileIcons.default;

//   return (
//     <div style={{ 
//       border: "1px solid #ddd", 
//       padding: "10px", 
//       borderRadius: "5px", 
//       display: "flex", 
//       alignItems: "center", 
//       gap: "10px",
//       // maxWidth: "300px"
//     }}>
//       <img src={icon} alt={`${fileExt} Icon`} width="50" />
//       <div>
//         <strong>
//           <a href={filePath} download>{fileName}</a>
//         </strong>
//         <br />
//         <small>{fileSize}</small>
//       </div>
//     </div>
//   );
// };

// export default DownloadBox;


// import React from "react";
// import useBaseUrl from "@docusaurus/useBaseUrl";

// // Function to get file extension
// const getFileExtension = (fileName) => {
//   return fileName.split(".").pop().toLowerCase();
// };

// // Define icons using useBaseUrl
// const getIconPath = (ext) => {
//   const icons = {
//     zip: "img/zip-icon.png",
//     py: "img/py-icon.png",
//     txt: "img/txt-icon.png",
//     pdf: "img/pdf-icon.png",
//     docx: "img/docx-icon.png",
//     default: "img/default-icon.png",
//   };
//   return useBaseUrl(icons[ext] || icons.default);
// };

// const DownloadBox = ({ fileName, fileSize, filePath }) => {
//   const fileExt = getFileExtension(fileName);
//   const icon = getIconPath(fileExt);

//   return (
//     <div style={{
//       border: "1px solid #ddd",
//       padding: "10px",
//       borderRadius: "5px",
//       display: "flex",
//       alignItems: "center",
//       gap: "10px"
//     }}>
//       <img src={icon} alt={`${fileExt} icon`} width="50" />
//       <div>
//         <strong>
//           <a href={filePath} download>{fileName}</a>
//         </strong>
//         <br />
//         <small>{fileSize}</small>
//       </div>
//     </div>
//   );
// };

// export default DownloadBox;

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

// Function to get file extension
const getFileExtension = (fileName) => {
  return fileName.split(".").pop().toLowerCase();
};

const DownloadBox = ({ fileName, fileSize, filePath }) => {
  const fileExt = getFileExtension(fileName);

  // Define icons inside the component
  const icons = {
    zip: "img/zip-icon.png",
    py: "img/py-icon.png",
    txt: "img/txt-icon.png",
    pdf: "img/pdf-icon.png",
    docx: "img/docx-icon.png",
    default: "img/default-icon.png",
  };

  const icon = useBaseUrl(icons[fileExt] || icons.default);
  const resolvedFilePath = useBaseUrl(filePath);

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      <img src={icon} alt={`${fileExt} icon`} width="50" />
      <div>
        <strong>
          <a href={resolvedFilePath} download>{fileName}</a>
        </strong>
        <br />
        <small>{fileSize}</small>
      </div>
    </div>
  );
};

export default DownloadBox;
