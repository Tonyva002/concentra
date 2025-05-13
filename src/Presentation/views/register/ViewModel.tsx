import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { RegisterWitchImageAuthUseCase } from "../../../Domain/useCase/auth/RegisterWitchImageAuth";
import { UserContext } from "../../context/UserContex";

export default function RegisterViewModel() {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    image: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { user, saveUserSession, getUserSession } = useContext(UserContext);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

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

  // Metodo para registrar usuario
  const register = async () => {
    if (isValidForm()) {
      setLoading(true);
      const response = await RegisterWitchImageAuthUseCase(values, file!);
      setLoading(false);
      console.log("RESULT:" + JSON.stringify(response));

      if (response.success) {
        await saveUserSession(response.data);
        getUserSession();
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

    if (values.email === "") {
      setErrorMessage("Enter your email");
      return false;
    }

    if (values.phone === "") {
      setErrorMessage("Enter your phone");
      return false;
    }

    if (values.password === "") {
      setErrorMessage("Enter your password");
      return false;
    }

    if (values.confirmPassword === "") {
      setErrorMessage("Confirm your password");
      return false;
    }

    if (values.password !== values.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    if (values.image === "") {
      setErrorMessage("Select an image");
      return false;
    }

    return true;
  };

  return {
    ...values,
    loading,
    errorMessage,
    user,
    onChange,
    register,
    pickImage,
    takePhoto,
    setErrorMessage,
  };
}
