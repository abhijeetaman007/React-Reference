import React, { useState, useEffect } from 'react';
//NOTE: (Hooks - useEfect)
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {

  const [value,setValue] = useState(0)

//  if(value > 0)
//  {

//    //,,, useEffect ---> we cant use hooks inside Hooks then how? 
//  } 

 //We will use if else (conditionals) inside useEffect
  //each time we render component useEffect everytime 
  useEffect(()=>{
    console.log('call useEffect')
    if(value>0)
    {
      //Something like notification title is changed
      document.title=`New Messages(${value})`
    }
    
  },[value])  //Second parameter is dependency list -- consists state


  useEffect(()=>{
    console.log("Hello World")
  },[])

  console.log('render component')
  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=> setValue(value+1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
