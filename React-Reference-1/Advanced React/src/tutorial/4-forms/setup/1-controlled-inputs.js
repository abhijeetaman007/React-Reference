import React, { useState } from 'react';
// JS-->
// const input = document.getElementById('myText');
// const inputValue = input.value
// React-->
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people,setPeople] = useState([])





    const handleSubmit = (e) => {
        e.preventDefault();
        //We already have state updated
        console.log('submit');
        console.log(firstName,email)

        if(firstName&&email){
          console.log('submit the form')
          const person={
            firstName,
            email,
            id:new Date().getTime().toString()
          }
          //IMP: we can pass method to setPeople and we need to return here people is prev or curr updated state
          setPeople((people)=>{
            return [...people,person]
          })
        }else{
          console.log('Empty values')
        }

        //Empty the state
        setFirstName("")
        setEmail("")

    };

    return (
        <>
            <article>
                {/* onSubmit can be both on form tag -->onSubmit in form tag or onClick on submit */}
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}  //value helps to connect to state
                            onChange={(e)=>setFirstName(e.target.value)}  //If we dont do this any change in the inputs wont show as state wont change
                        ></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email} //Connect to state =>value connected to state
                            onChange={(e)=>setEmail(e.target.value)} //update state=>onChange we get value
                        ></input>
                    </div>
                    <button type="submit">add person</button>
                </form>
                {/* Here instead of uuid we use current date time just a small cheat ;) for unique key of map */}
                {
                  people.map((person)=>{
                    const {id,firstName,email} = person
                    return <div className="item" key={id}>
                      <h4>{firstName}</h4>
                      <p>{email}</p>
                    </div>
                  })
                }
            </article>
        </>
    );
};

export default ControlledInputs;
