import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { UpdateWithImageUserUseCase } from "../../../../Domain/useCase/user/UpdateWithImageUser";
import { UpdateUserUseCase } from "../../../../Domain/useCase/user/UpdateUser";
import { User } from "../../../../Domain/entities/User";
import { ResponseApiConcentra } from "../../../../Data/sources/models/ResponseApiConcentra";
import { UserContext } from "../../../context/UserContex";

const ProfileUdateViewModel = (user: User) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMesage, setSuccessMesage] = useState("");
  const [values, setValues] = useState(user);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { saveUserSession } = useContext(UserContext);

  //Metodo para seleccionar imagen desde la galeria del dispositivo
  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Se requieren permisos para acceder a la galería.");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        selectionLimit: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        onChange("image", result.assets[0].uri);
        setFile(result.assets[0]);
      }
    } catch (error) {
      console.error("Error al seleccionar imagen:", error);
    }
  };

  // Metodo para tomar foto con el dispositivo
  const takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Se requieren permisos para acceder a la cámara.");
        return;
      }

      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        selectionLimit: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        onChange("image", result.assets[0].uri);
        setFile(result.assets[0]);
      }
    } catch (error) {
      console.error("Error al tomar foto:", error);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeInfoUpdate = (
    name: string,
    lastname: string,
    phone: string
  ) => {
    setValues({ ...values, name, lastname, phone });
  };

  // Metodo para actualizar usuario
  const update = async () => {
    if (isValidForm()) {
      setLoading(true);
      let response = {} as ResponseApiConcentra;
      if (values.image?.includes("https://")) {
        response = await UpdateUserUseCase(values);
      } else {
        response = await UpdateWithImageUserUseCase(values, file!);
      }
      setLoading(false);
      console.log("RESULT UPDATE:" + JSON.stringify(response));

      if (response.success) {
        saveUserSession(response.data);
        setSuccessMesage(response.message);
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Enter your name");
      return false;
    }

    if (values.lastname === "") {
      setErrorMessage("Enter your lastname");
      return false;
    }

    if (values.phone === "") {
      setErrorMessage("Enter your phone");
      return false;
    }

    return true;
  };

  return {
    ...values,
    loading,
    errorMessage,
    successMesage,
    setSuccessMesage,
    onChange,
    update,
    pickImage,
    takePhoto,
    onChangeInfoUpdate,
    setErrorMessage,
  };
};
export default ProfileUdateViewModel;
