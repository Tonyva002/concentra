import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContex";
import { Player } from "../../../../Domain/entities/Player";

const PlayerDetalsViewModel = (player: Player ) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMesage, setSuccessMesage] = useState("");
  const [values, setValues] = useState(player);
  const [loading, setLoading] = useState(false);
  const { saveUserSession } = useContext(UserContext);

 
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  
  
  return {
    ...values,
    loading,
    errorMessage,
    successMesage,
    setSuccessMesage,
    onChange,
    setErrorMessage,
  };
};
export default PlayerDetalsViewModel;
