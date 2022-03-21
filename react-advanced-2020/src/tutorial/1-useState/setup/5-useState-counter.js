import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value,setValue]= useState(0);
  const resetvalue = () =>{
setValue(0);
  }
  return <>
  <h2>Counter</h2>
  <h1>{value}</h1>
  <button className='btn'
   onClick={()=>{setValue(value+1)}}> Increase</button>
  <button className='btn' 
  onClick={()=>{setValue(value-1)}}> decrease</button>
  <button className='btn' 
  onClick={()=>{resetvalue()}}> Reset</button>
  </>;
};

export default UseStateCounter;
