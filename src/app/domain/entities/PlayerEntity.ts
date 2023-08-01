import { PlayerDto } from "src/app/models/interfaces/dtoInterfaces";

class PlayerEntity{

    id:          number;
    name:        string;
    position:    string;
    dateOfBirth: string;
    nationality: string;

    constructor(player:PlayerDto){
    this.id=          player.id;
    this.name=        player.name;
    this.position=    player.position;
    this.dateOfBirth= player.dateOfBirth;
    this.nationality= player.nationality;
    }
}

export default PlayerEntity;