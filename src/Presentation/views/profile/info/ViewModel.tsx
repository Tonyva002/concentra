import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContex';

export default function ProfileViewModel() {

    const {user, removeUserSession} = useContext(UserContext);

   


    return {
        removeUserSession,
        user
    };
}
