import React from 'react';

const ErrorExample = () => {

  let title = 'random title'

  const handleClick = (e) =>{
    title = 'hello people'  //by changing here we dont rerender component
    console.log(title)
    console.log(e.target)


  }
  
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change Title</button>
  </React.Fragment>;
};

export default ErrorExample;
