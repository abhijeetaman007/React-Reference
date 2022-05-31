import React, { useEffect, useRef } from 'react';

// preserves value between the render like states
// DOES NOT trigger re-render
// target DOM nodes/elements

//For uncontrolled Input

const UseRefBasics = () => {

  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)

  }


  //Note:Since useRef doesnt trigger rerender so while using useEffect we dont need to worry about dependency list
  useEffect(()=>{
    console.log("useEffect")
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return <>
    <form className="form"  onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer}></input>
        <button type="submit">Submit</button>
      </div>
      <div ref={divContainer}>
        Hello World
      </div>
    </form>
  </>;
};

export default UseRefBasics;
