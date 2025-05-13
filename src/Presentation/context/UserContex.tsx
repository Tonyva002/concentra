import React, { createContext, useEffect, useState } from "react";
import { User } from "../../Domain/entities/User";
import { SaveUserLocalUseCase } from "../../Domain/useCase/userLocal/SeveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCase/userLocal/RemoveUserLocal";

export const userInitialState: User = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  image: "",
  session_token: "",
  roles: [],
};

export interface UserContextProps {
  user: User;
  saveUserSession: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(userInitialState);

  useEffect(() => {
    getUserSession();
  }, []);


  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  const saveUserSession = async (user: User) => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };

  const removeUserSession = async () => {
    await RemoveUserLocalUseCase();
    console.log('Actualizando usuario prueba' + user);
    setUser(userInitialState);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        saveUserSession,
        getUserSession,
        removeUserSession,
      }}>
        {children}

    </UserContext.Provider>
  );
};
