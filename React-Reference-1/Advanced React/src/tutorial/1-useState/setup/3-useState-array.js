import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id)=>{
    let newPeople = people.filter((person)=> person.id != id )
    setPeople(newPeople)
  }


  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            {/* we are passing id to remove that */}
            <button type="button" onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* Even setPeople can be called with onClick in following way */}
      <button className="btn" onClick={()=>setPeople([])}>Clear Itmes</button>
    </>
  );
};

export default UseStateArray;
