import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  
  const[people,setPeople]=React.useState(data);
  const removeitem=(id)=>{
    let newPeople = people.filter((person)=>
     person.id !== id);
    setPeople(newPeople);

  };
  return (
  <React.Fragment>
    {
      people.map((person)=>{
        const{id,name}=person;
        return(
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button  onClick={()=>removeitem(id)}>remove item</button>
          </div>
        )
      })
    }
    <button type='button' className='btn'
     onClick={()=>(setPeople([]))}> Clear list</button>
    
  </React.Fragment>
  );
};

export default UseStateArray;
