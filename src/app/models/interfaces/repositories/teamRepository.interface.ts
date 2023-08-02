import { TeamEntity } from "src/app/domain/entities/TeamEntity"
import { Observable } from 'rxjs';
import PlayerEntity from "src/app/domain/entities/PlayerEntity";

export interface TeamStoreRepository{
    
  setTeams(teams:TeamEntity[]):void;
  setTeam(team:TeamEntity):void;
  setPopularTeams(teams:TeamEntity[]):void;
  setPlayers(players: PlayerEntity[]):void;
  getCurrent():Observable<TeamEntity>;
  getTeams():Observable<TeamEntity[]>;
  getPopularTeams():Observable<TeamEntity[]>;
  getListOfPlayers():Observable<PlayerEntity[]>;
  
}