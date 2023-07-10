import { Injectable } from '@angular/core';

import { competitions } from 'src/app/data/competitions';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagerService {

  constructor( 
    private storage:  CompetitionRepositoryNgrxStoreService,
  ) { }

  saveCompetitions(){
    this.storage.saveCompetitions(competitions);
  }

  setCurrentCompetition(competitionCode:string){
    this.storage.setCurrent(competitionCode);
  }

  getCurrentCompetition(){
    return this.storage.getCurrent();
  }

  getAll(){
    return this.storage.getAll();
  }

  getOne(competitionCode:string){
    this.storage.getOne(competitionCode);
  }
}
