import React from 'react';

const ErrorExample = () => {

  let title = 'Random title';

  const clickhandler=()=>{
     title = 'Not Random Title';
     console.log(title);
  };   
  return (
  <React.Fragment>
    <h2>{title}</h2>
  <button type="button" className="btn" onClick={clickhandler}>Change Title</button>
  </React.Fragment>
  );
};

export default ErrorExample;
