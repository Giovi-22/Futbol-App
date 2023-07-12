import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

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
  
  private strategy = inject(StrategyFactory);
  private selectedStrategy!:Strategies;
  constructor() 
  { 
    this.selectedStrategy = this.strategy.create('teamStorage')
  }
  selectStrategy(str:string){
    this.selectedStrategy = this.strategy.create(str);
  }

  getApiTeams(competitionCode:string ="PL"){
    //this.#selectedStrategy.getTeam()
    /*
    this.apiHttp.fetchData(`${this.#urlCompetition}${competitionCode}/teams`).subscribe({
      next:((result) =>
      {
        this.teamRepository.saveTeams(result.teams||[]);
      })
      })
      */
  }

/*
  getApiTeams(teamCode:number =86){
   
    this.strategy.getTeam(teamCode).subscribe(
    (result)=>{
      console.log("El resultado es: ",result)
    },
    (error)=>{
      console.log("Se ha producido un error: ",error)
    }
   )
   
  }
*/

  getTeam(teamCode:number){
    return new Observable<TeamEntity>((observer)=>{
    this.selectedStrategy.getTeam(teamCode).subscribe(
      (result)=> console.log(result)
    )
    });
    
  }

  getCurrent(){
    //return this.teamRepository.getCurrent();
  }
  getTeams(){
   // return this.teamRepository.getTeams();
   return new Observable<TeamEntity[]>();
  }
  
}
