import React, { useState } from 'react';

const ToggleButton = ({ label }) => {
  const [isOn,setIsOn]=useState(false);

  const toggleState=()=>setIsOn(prev=>!prev);

  return (
    <div>
      {label}
      <button
        onClick={toggleState}
        style={{
          color: "white",
          cursor: 'pointer',
          background: isOn ? 'green' : 'red'
        }}
      >
        {isOn?"ON":"OFF"}
      </button>
    </div>
  );
};

export default ToggleButton;
