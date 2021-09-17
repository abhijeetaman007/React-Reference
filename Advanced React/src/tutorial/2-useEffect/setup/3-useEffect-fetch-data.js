import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users,setUsers] = useState([]) 

  const getUsers = async()=>{
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users) 
    console.log(users)
  } 


  //NOTE: async we cant use inside useEffect
  // We are setting state users from fetching it from github api
  useEffect(()=>{
    getUsers()

  },[])  //Just once we need to render

  return <div>
    <h3>Github Users</h3>
    <ul className="users">
      {users.map((user)=>{
        const {id,login,avatar_url,html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt="login"></img>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </li>
      })}
    </ul>
  </div>
};

export default UseEffectFetchData;
