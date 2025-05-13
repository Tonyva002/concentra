import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContex';

export default function RolesViewModel() {

      
        const { user } = useContext(UserContext);
  return {

        user

  }
}