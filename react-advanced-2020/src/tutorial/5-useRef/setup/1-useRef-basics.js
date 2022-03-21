import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
const handleClick =(e)=>{
e.preventDefault();
console.log(refContainer.current.value)
}
  return (
    <>
      <form className="form">
        <label htmlFor="name">Name : </label>
        <input type="text" ref ={refContainer}/>
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
