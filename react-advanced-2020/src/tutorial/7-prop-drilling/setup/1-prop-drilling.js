import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  
  const removePeople=(id)=>{
    setPeople((people)=>{
     return people.filter((person)=> person.id !== id
      )
    })
  }

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePeople={removePeople}/>
    </section>
  );
};
const List = ({ people ,removePeople}) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePeople={removePeople} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name,removePeople }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <button onClick={()=>removePeople(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
