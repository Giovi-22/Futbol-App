import { Injectable } from '@angular/core';

import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { CompetitionApiStrategy } from '../strategies/competition/competitionStrategy.interface';
import CompetitionApiStrategyFactory from '../factory/competition/strategyFactory';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagerService {

  strategy:CompetitionApiStrategy;
  constructor( 
    private storage:  CompetitionRepositoryNgrxStoreService,
    private strategyFactory: CompetitionApiStrategyFactory
    ) {
      this.strategy = this.strategyFactory.create('CompetitionfootballApi');
    }

  findCompetitions(){
    this.strategy.getCompetitions().subscribe(
      (list)=>{
          this.storage.saveCompetitions(list);
      },
      (error)=>{
        throw new Error(`No se pudieron obtener las competiciones: ${error}`)
      })
  }

  findCompetition(competitionCode:string){
    this.strategy.getCompetition(competitionCode).subscribe(
      (result)=>{
        this.storage.saveCompetition(result)
      }
    )
  }

  findMatches(competitionCode:string){
    this.strategy.getMatches(competitionCode).subscribe(
      (result)=>{
        this.storage.addMatches(result);
      }
    )
  }

  findStandings(competitionCode:string){
    this.strategy.getStandings(competitionCode).subscribe(
      (result)=>{
        this.storage.addStandings(result);
      }
    )
  }

  setCurrent(competition:string){
    this.storage.setCurrent(competition);
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

}
