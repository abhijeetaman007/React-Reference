import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data)
  const removePerson=((id)=>{
    setPeople((people)=>{
      return people.filter((person)=> person.id!==id)
    })
  })

  return<section>
    <h3>Prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
  </section>

};

//NOTE: Here we need removePerson in SinglePerson component but we need to pass it down so many
// component then we get function in SinglePerson  -- this is Prop drilling 
//Technically all above component didnt actually require removePerson but we had to pass
// this we will solve using IMP: Context API


const List = ({people,removePerson})=>{
  return <>
    {
      people.map((person)=>{
        return <SinglePerson key={person.id} {...person} removePerson={removePerson}></SinglePerson>
      })
    }
  </>
}

const SinglePerson = ({id,name,removePerson}) =>{
  return <div className="item">
    <h4>{name}</h4>
    <button type="button" onClick={()=>removePerson(id)}>Remove</button>
  </div>
}
export default PropDrilling;
