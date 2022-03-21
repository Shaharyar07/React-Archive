import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "Sherry"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      <h1>{isError && "Error..."}</h1>
      {isError ? <h1>There is an error...</h1> : <h2>There is no Error</h2>}
    </>
  );
};

export default ShortCircuit;
