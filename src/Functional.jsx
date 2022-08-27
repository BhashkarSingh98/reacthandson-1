import React, { useState } from "react";


const inlinecss1={
  color:"white"
}
function Functional() {
  const [show, setState] = useState(false);
  return (
    <>
      <div className="boxx1">
        <button className="btn1" onClick={() => setState(!show)}>
          To see styling in Functional component
        </button>
        {show ? (
          <div className="box1">
            <h1 className="b1">This is created using functional Component</h1>
            <p className="b2">This is done using external Css</p>
            <p className="b3" style={inlinecss1}>This is done using internal Css</p>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Functional;
