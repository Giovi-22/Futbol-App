import { TeamEntity } from "src/app/domain/entities/TeamEntity"
import { Observable } from 'rxjs';

export interface TeamRepository{
    
  setTeams(teams:TeamEntity[]):void;

  setTeam(team:TeamEntity):void;

  setPopularTeams(teams:TeamEntity[]):void;
  
  getCurrent():Observable<TeamEntity>;
  
  getTeams():Observable<TeamEntity[]>;
  
  getPopularTeams():Observable<TeamEntity[]>;
  
}