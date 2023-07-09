import { Injectable } from '@angular/core';
import { CompetitionRepositoryNgrxStoreService } from '../data/repositories/competition-repository-ngrx-store.service';
import { competitions } from '../data/competitions';
import { Observable } from 'rxjs';
import { Competition } from '../models/interfaces/competitionInterfaces';

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
