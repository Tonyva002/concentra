import { createContext, useEffect, useState } from "react";
import { ResponseApiConcentra } from "../../Data/sources/models/ResponseApiConcentra";
import { Player } from '../../Domain/entities/Player';
import { GetPlayerUseCase } from "../../Domain/useCase/player/GetPlayer";
import { UpdatePlayerUseCase } from "../../Domain/useCase/player/UpdatePlayer";



export interface PlayerContextProps {
        players: Player[],
        getPlayer(): Promise<void>,
        updatePlayer(account: Player): Promise<ResponseApiConcentra>,
}

export const PlayerContext = createContext({} as PlayerContextProps);

export const PlayerProvider = ({children}: any) => {

        const [players, setPlayers] = useState<Player[]>([]);
  

        useEffect(() => {
         if(players.length === 0){
          getPlayers();
         }
        }, []);


        const getPlayers = async (): Promise<void> => {
            try {
              const result = await GetPlayerUseCase();
              setPlayers(result);
            } catch (error) {
              console.error("Error obteniendo los datos de la cuenta:", error);
            }
          };

          const updatePlayer = async (player: Player): Promise<ResponseApiConcentra> => {
            try {
              const response = await UpdatePlayerUseCase(player);
              getPlayers();
              return response;


            } catch (error) {
              console.error("Error obteniendo los datos de la cuenta:", error);

              throw new Error("Error al actualizar la cuenta");
            }
          };


          
          return (
            <PlayerContext.Provider
            value={{
              players: players,
              getPlayer: getPlayers,
              updatePlayer: updatePlayer,
            }}>

              {children}

            </PlayerContext.Provider>
          )
}
