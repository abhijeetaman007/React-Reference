import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// PersonContext has two component -- Provider,Consumer

const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        // we are using Provider of above created context PersonContext to set value and
        // get it anywhere in any children where provider is wrapperd
        // pass anything in value of provider and get it anywhere
        <>
            <PersonContext.Provider value={{ removePerson, people }}>
                <h3>Context API / useContext</h3>
                {/* Now no need to pass props and avoid prop drilling */}
                <List />
            </PersonContext.Provider>
        </>
    );
};

const List = () => {
    const mainData = useContext(PersonContext);
    console.log(mainData);

    return (
        <>
            {mainData.people.map((person) => {
                return <SinglePerson key={person.id} {...person}/>;
            })}
        </>
    );
};

//IMP: Using useContext we can get the value of  context anywhere

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext);
    return (
        <div className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
