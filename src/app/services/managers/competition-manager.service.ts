import { Injectable } from '@angular/core';

import { competitions } from 'src/app/data/competitions';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagerService {

  constructor( 
    private storage:  CompetitionRepositoryNgrxStoreService,
  ) { }

  saveCompetitions(){
    this.storage.getCompetitions().subscribe(
      (list)=>{
        if(!list.length){
          this.storage.saveCompetitions(competitions);
        }
      },
      (error)=>{
        throw new Error(`No se pudieron obtener las competiciones: ${error}`)
      })
  }

  setCurrentCompetition(competition:string){
    this.storage.setCurrent(competition);
  }

  getCurrentCompetition(){
    return this.storage.getCurrent();
  }

  getCompetitions(){
    return this.storage.getCompetitions();
  }

  getOne(competitionCode:string){
    this.storage.getOne(competitionCode);
  }
}
