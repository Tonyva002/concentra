import { PlayerRepositoryImpl } from "../../../Data/repositories/PlayerRepository";
import { Player } from "../../entities/Player";

const { update } = new PlayerRepositoryImpl();

export const UpdatePlayerUseCase = async (account: Player) => {

        return await update(account);
}