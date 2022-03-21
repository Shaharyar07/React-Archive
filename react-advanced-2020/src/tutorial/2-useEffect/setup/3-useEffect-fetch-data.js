import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [person,setPerson]=useState([]);

  const getUsers= async ()=>{
    const response = await fetch(url);
    const person = await response.json();
    setPerson(person);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return <>
  <h1>Github Users</h1>
  <ul className='users'>
    {person.map((user)=>{
      const{id,login,avatar_url,html_url}=user;
      return(
      <li key={id}>
          <img src={avatar_url} alt="" />
          <div>
            <h3>{login}</h3>
            <a href={html_url}> profile</a>
          </div>
        </li>
      );
    })}
  </ul>
  </>;
};

export default UseEffectFetchData;
