import './App.css';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  //
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className='App'>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>Name {name}</div>
      <div>Rendered {renderCount.current}</div>
    </div>
  );
}

export default App;
