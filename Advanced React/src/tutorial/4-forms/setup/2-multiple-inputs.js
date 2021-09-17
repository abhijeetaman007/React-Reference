import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

//Here we will be handling the case where we have many many inputs we dont want like to call those many functions


const ControlledInputs = () => {

  //Now we will try to get just one state value and one handler
  const [person,setPerson] = useState({
    firstName:'',email:'',age:''
  })
  const [people, setPeople] = useState([]);

  //IMP::One handleChange handler for all
  const handleChange = (e) =>{

    //we get the name of event as well as value 
    const name=e.target.name
    const value=e.target.value
    console.log(name,value)
    //IMP::Dynamically handling it
    setPerson({...person,[name]:value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(person.firstName&&person.age&&person.email)
    {
      const newPerson = {...person,id:new Date().getTime().toString()}
      setPeople([...people,newPerson])
      console.log(newPerson)
      setPerson({
        firstName:'',email:'',age:''
      })
    }
    else{
      console.log('Empty Inputs')
    }
  }


  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
