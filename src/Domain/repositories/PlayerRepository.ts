import { ResponseApiConcentra } from '../../Data/sources/models/ResponseApiConcentra';
import { Player } from '../entities/Player';

export interface PlayerRepository {

    getAll(): Promise<Player[]>;
    update(account: Player): Promise<ResponseApiConcentra>;
}