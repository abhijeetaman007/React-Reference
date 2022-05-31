import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setError] = useState();
    const [user, setUser] = useState('default user');

    useEffect(() => {
        //Initally before fetching isLoading is true
        setLoading(true);
        fetch(url)
            .then((resp) => {
                //Here we get error even in case of 404 by following code
                console.log(resp.status)
                
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();
                } else {
                    setLoading(false);
                    setError(true);
                    throw new Error(resp.statusText);
                }
            })
            
            .then((user) => {
                //When login user found set loading false and setUser
                const { login } = user;
                setUser(login);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    //Depending on state we render differently

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return (
            <div>
                <h1>Error...</h1>
            </div>
        );
    }

    return (
        <div>
            <h2>{user}</h2>
        </div>
    );
};

export default MultipleReturns;
