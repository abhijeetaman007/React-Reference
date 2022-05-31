import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: '',
};

const Index = () => {
    const [name, setName] = useState('');

    //TRADITONAL WAY: Using setState
    // const [people, setPeople] = useState(data);
    // const [showModal, setShowModal] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (name) {
    //         setShowModal(true);
    //         setPeople([...people, { id: new Date().getTime().toString(), name }]);
    //         setName('');
    //     } else {
    //         setShowModal(true);
    //     }
    // };

    //IMP: Using Reducers
    //setReducer --> pass reducer
    // => reducer helps control state takes states and action
    // => action in reducer is object which dispatch passes telling what action to be taken and even have payload for changing state as per payload

    //=> dispatch helps to call reducer for taking action on state to modify state

    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name');
        console.log(name);
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'ADD_ITEM', payload: newItem });
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <>
            {/* we can even pass function as prop */}
            {/* Checking is isModalOpen true then sending close Modal dispatcher and sending modal content */}
            {state.isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    modalContent={state.modalContent}
                />
            )}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: 'REMOVE_ITEM',
                                    payload: person.id,
                                })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
