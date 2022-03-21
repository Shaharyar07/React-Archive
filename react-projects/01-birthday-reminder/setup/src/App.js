import { Button } from 'bootstrap';
import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(data);
  const clearlist=()=>{
    setPeople([]);
  }
   
  
  return <main>
    <section className="container">
    <h2>{people.length} Birthdays Today</h2>
    <List people={people} />
    
    <button onClick={()=>{clearlist()}}>Clear All</button>
    </section>
  </main>;
  
}

export default App;
