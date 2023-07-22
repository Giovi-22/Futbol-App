import { Injectable } from '@angular/core';

import { popularTeams } from '../../store/popularTeams';
import { TeamApiStrategy } from '../strategies/team/teamStrategies';
import ApiStrategyFactory from '../factory/team/strategyFactory';
import StoreRepositoryFactory from '../factory/team/storeFactory';
import { TeamRepository } from 'src/app/data/repositories/team/teamRepository';
import { Router } from '@angular/router';


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
    this.apiStrategy.getTeam(teamCode).subscribe(
      (team)=>{
        this.storeStrategy.setTeam(team);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  findApiTeams(competitionCode:string ="PL"){
    this.apiStrategy.getTeams(competitionCode).subscribe(
      (result)=>{
        this.storeStrategy.setTeams(result)
      },
      (error)=>{
        this.router.navigate(['not-found',error])
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