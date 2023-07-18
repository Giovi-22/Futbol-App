import { Injectable } from '@angular/core';

import { popularTeams } from '../../store/popularTeams';
import { TeamApiStrategy } from '../strategies/team/teamStrategies';
import ApiStrategyFactory from '../factory/strategyFactory';
import StoreRepositoryFactory from '../factory/storeFactory';
import { TeamRepository } from 'src/app/data/repositories/team/teamRepository';


@Injectable({
  providedIn: 'root'
})
export class TeamManagerService  {
  
  apiStrategy: TeamApiStrategy ;
  storeStrategy: TeamRepository;
    ; 
  constructor(
    private storeStrategyFactory: StoreRepositoryFactory,
    private apiStrategyFactory: ApiStrategyFactory
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
    this.apiStrategy.getTeam(teamCode).subscribe(
      (team)=>{
        this.storeStrategy.setTeam(team);
        console.log("EL equipo es: ",team)
      }
    )
  }

  findApiTeams(competitionCode:string ="PL"){
    this.apiStrategy.getTeams(competitionCode).subscribe(
      (result)=>{
        this.storeStrategy.setTeams(result)
      }
    )
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

}