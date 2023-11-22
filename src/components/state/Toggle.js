/** @format */

import React, { useState } from "react";
import "./ToggleStyle.css";
// //stateless functional component: component không có state, chỉ có props
// function Toggle() {
//     return <div className="toggle"></div>
// }

// //statefull functional component: component có state và props
//  function Toggle2()
//  {
//     const [isToggleOn, setIsToggleOn] = React.useState(true);
//     return (
//         <div className="toggle"></div>
//     )
//  }

function Toggle() {
  //1. enabling state: useState(init value: boolean, function, object, array)
  //2. init state: useState(flase)
  //3. reading state: isToggleOn
  //4. update state: setIsToggleOn

  const [isToggleOn, setIsToggleOn] = useState(false);
  return (
    <div>
      <div className={`${isToggleOn ? "toggle active" : "toggle"}`} onClick={()=>setIsToggleOn(!isToggleOn)}>
        <div className={`spinner ${isToggleOn ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
