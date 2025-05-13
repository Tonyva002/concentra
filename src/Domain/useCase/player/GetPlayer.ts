import { PlayerRepositoryImpl } from "../../../Data/repositories/PlayerRepository";


const { getAll } = new PlayerRepositoryImpl();

export const GetPlayerUseCase = async () =>{

    return await getAll();
}