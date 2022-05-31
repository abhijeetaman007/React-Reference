import React, { useState } from 'react';

//NOTE: since Inside return we cant use react so we need to use following because if doesnt return value
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [isError,setIsError] = useState(false)
  const [text,setText] = useState('')

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
    {/* Using ShortCircuit to render  */}
    {/* <h1>{firstValue}</h1> */}
    {/* <h1>value: {secondValue}</h1> */}

    <h2>{text || 'john doe'}</h2>
    <button type="button" className="btn" onClick={()=>setIsError(!isError)}>Toggle Error</button> 

    {/* {text && <h1>hello world</h1>} */}
    {/* If isError true display */}
    {isError && <h1>Error...</h1>}

    {/* ternary operator  will give two value i.e if and else */}
    {isError ? (<p>There is an error...</p>):(<p>There is no error</p>)}

  </>;
};

export default ShortCircuit;
