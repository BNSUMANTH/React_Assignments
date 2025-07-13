import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Access DOM node
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={App}>Focus the input</button>
    </div>
  );
}
export default App
