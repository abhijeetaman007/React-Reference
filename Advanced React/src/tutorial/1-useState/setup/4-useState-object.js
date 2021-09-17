import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Aman',
        age: 20,
        message: 'random message',
    });

    console.log(person);

    const ChangeMessage = ()=>{

      //Imp to use spread operator with objects
      //While using objects always use spread operator to keep previous state same and just override required feild in second parameter
      setPerson({...person,message:"hello world"})
    }


    return <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={ChangeMessage}>Change Message</button>
    </>;
};

export default UseStateObject;
