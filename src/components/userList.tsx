import React, { useEffect } from 'react';
import { useActions } from '../hook/useActions';
import { useTypeSelector } from '../hook/useTypeSelector';

const UserList : React.FC = () => {
    const {user,error,loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    
    
    if(loading) {
        return <h1> Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
                {user.map(user => 
                    <div key={user.id}>{user.name}</div>
                    )}
        </div>
    );
};

export  {UserList}