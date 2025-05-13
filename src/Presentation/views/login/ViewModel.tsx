import React, { useContext, useState } from "react";
import { LoginAuthUseCase } from "../../../Domain/useCase/auth/LoginAuth";
import { UserContext } from "../../context/UserContex";

export default function LoginViewModel() {
  const [errorMessage, setErrorMessage] = useState("");
  const {user, saveUserSession, getUserSession } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log('USUARIO DE SESION: ' + JSON.stringify(user));


  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

    const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("RESPONSE LOGIN: " + JSON.stringify(response));
      if(!response.success){
        setErrorMessage(response.message);
      }else {
        await saveUserSession(response.data);
        await getUserSession();
      
        
      }
    }
  };


  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Enter the email");
      return false;
    }

    if (values.password === "") {
      setErrorMessage("Enter the password");
      return false;
    }

    return true;
  };

  return {
    ...values,
    errorMessage,
    user,
    setErrorMessage,
    onChange,
    login,
  };
}
