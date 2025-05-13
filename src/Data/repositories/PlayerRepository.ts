import { PlayerRepository } from '../../Domain/repositories/PlayerRepository'
import { Player } from '../../Domain/entities/Player'
import { AxiosError } from 'axios'
import {ApiConcentra } from '../sources/remote/api/ApiConcentra'
import {ResponseApiConcentra } from '../sources/models/ResponseApiConcentra';

export class PlayerRepositoryImpl implements PlayerRepository {

   async update(account: Player): Promise<ResponseApiConcentra> {
    try {
      const response = await ApiConcentra.put<ResponseApiConcentra>(
        "/players/update",
        account
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

   

   async getAll(): Promise<Player[]> {
    try {
        const response = await ApiConcentra.get<Player[]>("/players/getAll");
        
        return Promise.resolve(response.data);
      } catch (error) {
        let e = error as AxiosError;
        console.log("ERROR:" + JSON.stringify(e.response?.data));
        return Promise.resolve([]);
      }
    }
 
}