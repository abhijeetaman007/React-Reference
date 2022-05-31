export const reducer = (state, action) => {
    console.log(state);
    //Adding Item
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        //IMP: Reducer always needs to return state else state will be lost
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        };
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter value',
        };
    }
    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false };
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return {
            ...state,
            people: newPeople,
            modalContent: 'Item Removed',
            isModalOpen: true,
        };
    }

    //To handle default case either we can return old state or return an error
    //Returning Error is better as we get to know action type didnt exist

    //One way:
    // return state
    //Another better way to return error:
    return new Error('No such actions');
};
