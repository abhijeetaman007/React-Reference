import React, { useState, useEffect } from 'react';


//Showing and hiding a component
const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button type="button" className="btn" onClick={()=>setShow(!show)}> 
                show/hide
            </button>
            {show && <Item/>}
        </>
    );
};


const Item = () =>{

  const [size,setSize] = useState(window.innerWidth)

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checkSize)
    //To avoid multiple event listener
    //Clean up function -- once we remove component even event listener is removed
    return () =>{
      window.removeEventListener('resize',checkSize)
    }
  },[])

  return <div style={{marginTop:'2rem'}}>
    <h1>Window</h1>
    <h2>Size: {size}Px</h2>
  </div>
}

export default ShowHide;
