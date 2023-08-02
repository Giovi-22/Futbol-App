import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { TeamApiStrategy } from '../strategies/team/teamStrategies';
import ApiStrategyFactory from '../factory/team/strategyFactory';
import StoreRepositoryFactory from '../factory/team/storeFactory';
import { TeamRepository } from 'src/app/models/interfaces/repositories/teamRepository.interface';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';
import { popularTeams } from 'src/app/data/ngrxStore/popularTeams';


@Injectable({
  providedIn: 'root'
})
export class TeamManagerService  {
  
  apiStrategy: TeamApiStrategy ;
  storeStrategy: TeamRepository;
    ; 
  constructor(
    private storeStrategyFactory: StoreRepositoryFactory,
    private apiStrategyFactory: ApiStrategyFactory,
    private router: Router
  ) 
  { 
    this.apiStrategy = this.apiStrategyFactory.create('TeamfootballApi');
    this.storeStrategy = this.storeStrategyFactory.create('NgrxStore');
  }

  setApiStrategy(strategy:string){
    this.apiStrategy = this.apiStrategyFactory.create(strategy);
  }

  setStoreStrategy(strategy:string){
    this.storeStrategy = this.storeStrategyFactory.create(strategy);
  }
  

  findApiTeam(teamCode:number=86){
    return this.apiStrategy.getTeam(teamCode).subscribe(
      (team)=>{
        this.storeStrategy.setTeam(team);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  findApiPlayers(playerList:number[]){
    return this.apiStrategy.getPlayers(playerList).pipe(
      map((result)=>{
        this.storeStrategy.setPlayers(result);
        return result;
      }),
      catchError((error)=>{
        return throwError(error);
      })
    );
  }
  findApiTeams(competitionCode:string ="PL",filter?:ApiFootballDataFilters){
    this.apiStrategy.getTeams(competitionCode,filter).subscribe(
      (result)=>{
        this.storeStrategy.setTeams(result)
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  searchTeam(teamName:string){
    console.log("el team buscado es: ",teamName)
    console.log("La estrategia es: ",this.apiStrategy)
    return this.apiStrategy.getTeamsByName(teamName);
  }
  getStoreTeam(teamCode:number){
    return this.storeStrategy.getCurrent() 
  }

  getStoreCurrent(){
    return this.storeStrategy.getCurrent();
  }


  getStoreTeams(){
    return this.storeStrategy.getTeams();
  }

  setStorePopularTeams(){
  this.storeStrategy.setPopularTeams(popularTeams);
  }

  getStorePopularTeams(){
  return this.storeStrategy.getPopularTeams();
  }

  getPlayers(){
    return this.storeStrategy.getListOfPlayers();
  }

}