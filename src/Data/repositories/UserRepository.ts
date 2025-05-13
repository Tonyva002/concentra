import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseApiConcentra } from "../sources/models/ResponseApiConcentra";
import { ApiConcentra, ApiConcentraForImage } from "../sources/remote/api/ApiConcentra";
import { AxiosError } from "axios";
import  mime  from "mime";

export class UserRepositoryImpl implements UserRepository{


    async update(user: User): Promise<ResponseApiConcentra> {
        try {
            const response = await ApiConcentra.put<ResponseApiConcentra>(
              "/users/updateWithoutImage",
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


    async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseApiConcentra> {
        try {
            const formData = new FormData();
            // @ts-ignore
            formData.append('image', {
              uri: file.uri,
              name: file.uri.split('/').pop(),
              type: mime.getType(file.uri)  // Obtenemos el tipo de archivo de la imagen (png, jpg, etc.).
            });
            formData.append('user', JSON.stringify(user));
      
            const response = await ApiConcentraForImage.put<ResponseApiConcentra>(
              "/users/updateWithImage",
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