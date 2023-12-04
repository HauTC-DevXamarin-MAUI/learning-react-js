import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// //custom function
// function emitComments(id) {
//   setInterval(() => {
//     window.dispatchEvent(`envetName-${id}`, {
//       detail: {
//         id,
//         comment: `Comment ${id}`,
//       },
//     });
//   }, 2000);
// }
// emitComments(1);
// //Use custom function
// const [commentId, setCommentId] = useState(1);
// useEffect(() => {
//   const handleEvent = (e) => {
//     console.log(e.detail);
//   };
//   window.addEventListener(`envetName-${commentId}`, handleEvent);

//   //Remove DOM event listener
//   return () => {
//     window.removeEventListener(`envetName-${commentId}`, handleEvent);
//   };
// }, [commentId]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
