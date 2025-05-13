import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import {ResponseApiConcentra } from "../sources/models/ResponseApiConcentra";
import { ApiConcentra, ApiConcentraForImage } from "../sources/remote/api/ApiConcentra";
import { ImagePickerAsset } from "expo-image-picker";
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<ResponseApiConcentra> {
    try {
      const response = await ApiConcentra.post<ResponseApiConcentra>(
        "/users/login",
        {
          email: email,
          password: password,
        }
      );

      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR:" + JSON.stringify(e.response?.data));
      const apiError: ResponseApiConcentra = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async register(user: User): Promise<ResponseApiConcentra> {
    try {
      const response = await ApiConcentra.post<ResponseApiConcentra>(
        "/users/create",
        user
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiConcentra = JSON.parse(
        JSON.stringify(e.response?.data)
      );

      return Promise.resolve(apiError);
    }
  }

  async registerWithImage(
    user: User,
    file: ImagePickerAsset
  ): Promise<ResponseApiConcentra> {
    try {
      const formData = new FormData();
      // @ts-ignore
      formData.append('image', {
        uri: file.uri,
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)  // Obtenemos el tipo de archivo de la imagen (png, jpg, etc.).
      });
      formData.append('user', JSON.stringify(user));

      const response = await ApiConcentraForImage.post<ResponseApiConcentra>(
        "/users/createWithImage",
        formData
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiConcentra = JSON.parse(
        JSON.stringify(e.response?.data)
      );

      return Promise.resolve(apiError);
    }
  }
}
