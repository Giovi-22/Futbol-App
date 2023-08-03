import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

import { TeamApiStrategy } from '../../models/interfaces/strategies/teamStrategies';
import ApiStrategyFactory from '../factory/team/apiStrategyFactory';
import { TeamStoreRepository } from 'src/app/models/interfaces/repositories/teamRepository.interface';
import { ApiFootballDataFilters, Error } from 'src/app/models/interfaces/dtoInterfaces';
import { popularTeams } from 'src/app/data/ngrxStore/popularTeams';
import StoreRepositoryFactory from '../factory/team/storeStrategyFactory';
import { ErrorService } from 'src/app/services/error.service';


@Injectable({
  providedIn: 'root'
})
export class TeamManagerService  {
  
  apiStrategy: TeamApiStrategy ;
  storeStrategy: TeamStoreRepository;
    ; 
  constructor(
    private storeStrategyFactory: StoreRepositoryFactory,
    private apiStrategyFactory: ApiStrategyFactory,
    private errorS: ErrorService
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
    return this.apiStrategy.getTeam(teamCode).subscribe({
      next:(team)=>{
        this.storeStrategy.setTeam(team);
      },
      error:(error:Error)=>{
        this.errorS.dispatchError(error)
      }
    })
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
        this.errorS.dispatchError(error)
      }
    )
  }

  searchTeam(teamName:string){
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