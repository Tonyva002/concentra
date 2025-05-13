import {ResponseApiConcentra } from "../../Data/sources/models/ResponseApiConcentra";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';


export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseApiConcentra>;
    register(user: User): Promise<ResponseApiConcentra>
    registerWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiConcentra>
}