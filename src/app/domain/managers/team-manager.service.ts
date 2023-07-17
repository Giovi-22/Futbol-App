import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, observable, of, switchMap } from 'rxjs';

import StrategyFactory from '../factory/strategyFactory';
import { teamStrategy } from 'src/app/models/interfaces/strategiesInterfaces';
import { Team } from 'src/app/models/interfaces/competitioniterfaces';
import { FetchDataService } from '../../services/fetch-data.service';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { popularTeams } from '../../store/popularTeams';
import { TeamRepositoryNgrxStoreService } from 'src/app/data/repositories/team-repository-ngrx-store.service';


@Injectable({
  providedIn: 'root'
})
export class TeamManagerService implements teamStrategy {
  

  constructor(
    private http:FetchDataService,
    private storeRepository: TeamRepositoryNgrxStoreService
  ) 
  { 
    
  }


  getApiTeam(teamCode:number=86){
    this.http.getTeam(teamCode).subscribe(
      (team)=>{
        this.storeRepository.setTeam(team);
      }
    )
  }

  getApiTeams(competitionCode:string ="PL"){
    this.http.getTeams(competitionCode).subscribe(
      (result)=>{
        this.storeRepository.saveTeams(result)
      },
      (error)=>{
        throw new Error(`No se pudieron obtener los equipos, error: ${error}`)
      }

    )
  }

  getTeam(teamCode:number){
    return new Observable<TeamEntity>((observer)=>{
    
    });
    
  }

  getCurrent(){
    return this.storeRepository.getCurrent();
  }


  getTeams(){
   return new Observable<TeamEntity[]>((observer)=>{
    this.storeRepository.getTeams().subscribe(
      (teams)=>{
        observer.next(teams)
      },
      (error)=>{throw new Error(`No hay equipos disponibles, error: ${error}`)}
    )
   });
  }

setPopularTeams(){
  this.storeRepository.setPopularTeams(popularTeams);
}

getPopularTeams(){
  return this.storeRepository.getPopularTeams();
}

}