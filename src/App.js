import './App.css';
import React, { useEffect, useRef } from 'react';
import Input from './components/Input';

function App() {
  //
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);
  //
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  //
  const firstKeyDown = (e) => {
    //synthetic event
    if (e.key === 'Enter') {
      lastNameRef.current.focus();
    }
  };
  const lastKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitRef.current.focus();
    }
  };
  const submitKeyDown = (e) => {
    alert('Form submited!');
  };

  return (
    <div className='App'>
      <h5>If No mouse at client - user case frontend form inputs !</h5>
      <input
        type='text'
        onKeyDown={firstKeyDown}
        ref={firstNameRef}
        placeholder='Enter Name:'
      />
      <input
        type='text'
        onKeyDown={lastKeyDown}
        ref={lastNameRef}
        placeholder='Enter Last Name:'
      />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        Submit Form
      </button>
    </div>
  );
}

export default App;
