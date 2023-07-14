import { Injectable } from '@angular/core';

import { competitions } from 'src/app/data/competitions';
import { CompetitionRepositoryNgrxStoreService } from 'src/app/data/repositories/competition-repository-ngrx-store.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { FetchDataService } from '../fetch-data.service';
import { Observable, map, firstValueFrom } from 'rxjs';
import { CompetitionDto } from 'src/app/models/interfaces/dtoInterfaces';

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
      console.log("dentro de get competition manager")
      return new Observable<CompetitionEntity[]>((observer)=>{
      this.storage.getCompetitions().subscribe(
        (result)=>{
          console.log("dentro de la subscripcion")
          if(!result.length){
            console.log("no hay competiciones guardadas")
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

/*
  getCompetitions(){
    return this.storage.getCompetitions();
  }
*/
  getCompetition(){
    return new Observable<CompetitionEntity>((observer)=>{
    this.storage.getCompetition().subscribe(
      (competition)=>{
        if(!competition){
          console.log("la competicion no existe, yendo a buscar")
          this.getCurrentCompetition().subscribe(
            (current)=>{
              const competition = this.getApiCompetition(current);
            }
          )
        }
        else{
          console.log("la competicion existe: ",competition)
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
