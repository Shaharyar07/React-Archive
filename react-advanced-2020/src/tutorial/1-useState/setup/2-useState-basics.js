import React, { useState } from 'react';

const UseStateBasics = () => {
  const[text,setText]=useState('Random title');
  const clickhandler= ()=>{
    if (text=='Random title') {
      setText('Not Random title');
    }else{
      setText('Random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={clickhandler}>Ookiedokie</button>
    </React.Fragment>

  );
};

export default UseStateBasics;
