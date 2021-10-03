import './App.css';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [name, setName] = useState('');
  const prevName = useRef();

  //
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className='App'>
      <input
        ref={prevName}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        Name {name} and used to be {prevName.current}
      </div>
    </div>
  );
}

export default App;
