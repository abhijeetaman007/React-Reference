import React, { useState } from 'react';

const UseStateBasics = () => {
  //NOTE: (HOOKS)
  // useXXX type name is used for Hooks
  //Component starts with capital letter
  // Hooks must be in function/component body
  // cannot call conditonally


// console.log(useState('hello world'))
//useState returns array
// const value = useState(1)[0]     ---> variable
// const handler = useState(1)[2]  -->function

//We use array destructuring  (Note: setText can be named as anything but by convention we name setText or setNameofstate 
const [text,setText] =  useState('random title')  //In params we pass default values


const handleClick = () => {

    if(text == 'random title')
      setText('hello world')
    else
      setText('random title')
}

return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>Change Title</button>
  </React.Fragment>
)


  return <h2>useState basic example</h2>;
};

export default UseStateBasics;
