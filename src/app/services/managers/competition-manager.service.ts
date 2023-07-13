import { Injectable } from '@angular/core';

import { competitions } from 'src/app/data/competitions';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { FetchDataService } from '../fetch-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionManagerService {

  constructor( 
    private storage:  CompetitionRepositoryNgrxStoreService,
    private http: FetchDataService
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

  getCompetition(){
    return new Observable<CompetitionEntity>((observer)=>{
    this.storage.getCompetition().subscribe(
      (competition)=>{
        if(!competition){
          this.getCurrentCompetition().subscribe(
            (current)=>{
              this.getApiCompetition(current);
            }
          )
        }
        else{
          observer.next(competition);
        }
      }
    );
  });
  }

  getApiCompetition(competitionCode:string){
    this.http.getCompetition(competitionCode).subscribe(
      (result)=>{
        this.storage.saveCompetition(result)
      }
    )
  }
}
