import { Injectable } from '@angular/core';

import { competitions } from '../../store/competitions';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { FetchDataService } from '../../services/fetch-data.service';
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
    return new Observable<CompetitionEntity[]>((observer)=>{
    this.storage.getCompetitions().subscribe(
      (result)=>{
        if(!result.length){
          this.http.getCompetitions().subscribe(
            (result)=>{
              this.storage.saveCompetitions(result);
          })
        }else{
          this.storage.getCompetitions().subscribe(
            (result)=>observer.next(result));
        }
      })
    })
  }

  addMatches(competitionCode:string){
    this.http.getCompetitionMatches(competitionCode).subscribe(
      (result)=>{
        this.storage.addMatches(result);
      }
    )
  }

  getCompetition(){
    return new Observable<CompetitionEntity>((observer)=>{
    this.storage.getCompetition().subscribe(
      (competition)=>{
        if(!competition){
          this.getCurrentCompetition().subscribe(
            (current)=>{
              const competition = this.getApiCompetition(current);
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

  getMatches(){
    return this.storage.getMatches();
  }

}
