import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setSize] = useState(window.innerWidth)

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log("hello")

    //Since we are adding event listener so ther will be many event listener so we need to remove
    window.addEventListener('resize',checkSize) //Has two param type,listener

    //Clean up fuction in useEffect
    //Good practice
    return ()=>{
      console.log('Clean up')
      //Removeing event listener
      window.removeEventListener('resize',checkSize)
    }
    
  })

  //Or we can simply add an empty dependency list which means we just add one event listener 
  //When initally useEffect we just add one event listerner

  console.log('render')

  return (    
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
