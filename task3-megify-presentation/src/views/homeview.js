import React, { useState } from "react";

const HomeView = (props) => {
  const [style, setStyle] = useState("blanket");
  
  const changeStyle = () => {
    console.log("you just clicked");
    
    setStyle("blanket2");
  };

  return (
      <div>
        <button onClick={changeStyle}> Reveal Message </button>
        <div className={style}><p>{props.message}</p></div>
      </div>
  );
}

export default HomeView