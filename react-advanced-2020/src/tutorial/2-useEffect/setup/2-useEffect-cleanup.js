import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const[size,setSize]=useState(window.innerWidth);
  const getsize =()=>{
    setSize(window.innerWidth);
  }

useEffect(()=>{
window.addEventListener('resize',getsize)
});
  return <>

  <h1>Window's Size</h1>
  <h1>{size} px</h1>
  </>;
};

export default UseEffectCleanup;
