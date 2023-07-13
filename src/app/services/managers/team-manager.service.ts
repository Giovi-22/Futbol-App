import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import StrategyFactory from '../factory/strategyFactory';
import { teamStrategy } from 'src/app/models/interfaces/strategiesInterfaces';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { TeamRepositoryNgrxStoreService } from 'src/app/data/repositories/team-repository-ngrx-store.service';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { FetchDataService } from '../fetch-data.service';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';

type Strategies = TeamRepositoryNgrxStoreService | CompetitionRepositoryNgrxStoreService | FetchDataService;

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService implements teamStrategy {
  

  constructor(
    private http:FetchDataService,
    private store: TeamRepositoryNgrxStoreService
  ) 
  { 
    
  }


  getApiTeam(teamCode:number=86){
    this.http.getTeam(teamCode).subscribe(
      (team)=>{
        this.store.setTeam(team);
      }
    )
    /*
    this.apiHttp.fetchData(`${this.#urlCompetition}${competitionCode}/teams`).subscribe({
      next:((result) =>
      {
        this.teamRepository.saveTeams(result.teams||[]);
      })
      })
      */
  }


  getApiTeams(competitionCode:string ="PL"){
    this.http.getTeams(competitionCode).subscribe(
      (result)=>{
        this.store.saveTeams(result)
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
    return this.store.getCurrent();
  }

  getTeams(){
   return new Observable<TeamEntity[]>((observer)=>{
    this.store.getTeams().subscribe(
      (teams)=>{
        observer.next(teams)
      },
      (error)=>{throw new Error(`No hay equipos disponibles, error: ${error}`)}
    )
   });
  }
  
}

/*
newTeam = new TeamEntity({
            area:undefined,     
            id:0,    
            name:"",    
            shortName:"",
            tla:"",    
            logo:"",
            coach:undefined,
            squad:[]
            */