import {ResponseApiConcentra } from "../../Data/sources/models/ResponseApiConcentra";
import { User } from "../entities/User";
import * as ImagePicker from 'expo-image-picker';

export interface UserRepository {

    update(user: User): Promise<ResponseApiConcentra>,
    updateWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseApiConcentra>,

}