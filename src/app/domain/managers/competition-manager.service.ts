import { Injectable } from '@angular/core';

import { CompetitionNgrxStoreRepositoryService } from 'src/app/data/repositories/competition/competition-repository-ngrx-store.service';
import { CompetitionApiStrategy } from '../../models/interfaces/strategies/competitionStrategies.interface';
import CompetitionApiStrategyFactory from '../factory/competition/strategyFactory';
import { ApiFootballDataFilters } from 'src/app/models/interfaces/dtoInterfaces';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagerService {

  strategy:CompetitionApiStrategy;
  constructor( 
    private storage:  CompetitionNgrxStoreRepositoryService,
    private strategyFactory: CompetitionApiStrategyFactory,
    private router: Router
    ) {
      this.strategy = this.strategyFactory.create('CompetitionfootballApi');
    }

  findCompetitions(){
    this.strategy.getCompetitions().subscribe(
      (list)=>{
          this.storage.saveCompetitions(list);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      })
  }

  findCompetition(competitionCode:string,filter?:ApiFootballDataFilters){
    this.strategy.getCompetition(competitionCode,filter).subscribe(
      (result)=>{
        this.storage.saveCompetition(result);
        const currentSeason = moment(result.currentSeason?.startDate).format('YYYY');
        this.storage.setCurrentSeason(currentSeason);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  findMatches(competitionCode:string,filter?:ApiFootballDataFilters){
    this.strategy.getMatches(competitionCode,filter).subscribe(
      (result)=>{
        this.storage.addMatches(result);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  findStandings(competitionCode:string,filter?:ApiFootballDataFilters){
    this.strategy.getStandings(competitionCode,filter).subscribe(
      (result)=>{
        this.storage.addStandings(result);
      },
      (error)=>{
        this.router.navigate(['not-found',error])
      }
    )
  }

  setCurrent(competition:string){
    this.storage.setCurrent(competition);
  }

  setCurrentSeason(season:string){
    this.storage.setCurrentSeason(season);
  }

  getCurrent(){
    return this.storage.getCurrent();
  }

  getCompetitions(){
    return this.storage.getCompetitions();
  }

  getCompetition(){
    return this.storage.getCompetition();
  }

  getMatches(){
    return this.storage.getMatches();
  }

  getStandings(){
    return this.storage.getStandings();
  }

  getSeason(){
    return this.storage.getCurrentSeason();
  }

}
