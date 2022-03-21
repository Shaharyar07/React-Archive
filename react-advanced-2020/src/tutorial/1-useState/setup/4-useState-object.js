import React, { useState } from 'react';


const UseStateObject = () => {

  const [Qasai,setQasai]= useState({
    qurbanShudaJanwar: 'Bakraaa',
    age: 20,
    qasai:'sanaullah',

  });
const reveilQasai =()=>{
  setQasai({...Qasai,qasai:'SSanaullah'})
}

  return(
     <React.Fragment>
     <h3>{Qasai.qurbanShudaJanwar}</h3>
       <h3>{Qasai.age}</h3>
       <h1>{Qasai.qasai}</h1>
       <button className='btn' onClick={()=>{reveilQasai()}} > verify qasai</button>
  </React.Fragment>
  )

      

};

export default UseStateObject;
