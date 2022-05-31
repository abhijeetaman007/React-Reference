import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  
  const reset = () =>{
    setValue(0)
  }

  const complexIncrease = () =>{
    setTimeout(()=>{
      //Here we were not getting the updated value rather non updated one
      // setValue(value + 1)

      //Imp.: we can pass function in state
      //Passing function in set values we get updated previous state
      setValue((prevState)=>{  //Helps to get the prevState
        return prevState + 1  // what we return is the new state value
      })

    },2000)
  }

  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value-1)}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={()=>setValue(value+1)}>increase</button>
      </section>
      <section style={{margin:'4rem 0'}}>
        <h2>More Complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase With Delay</button>
      </section>
    </>
  )
  
  return <h2>useState counter example</h2>;

};

export default UseStateCounter;
