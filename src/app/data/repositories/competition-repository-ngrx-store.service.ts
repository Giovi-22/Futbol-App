import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { currentCompetition, loadedCompetitions } from '../state/actions/competitions.actions';
import { CompetitionCard } from 'src/app/models/storeModelsInterfaces';
import { selectCompetitionsList, selectCurrentCompetition } from '../state/selectors/competitions.selectors';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompetitionRepositoryNgrxStoreService {

  constructor(
    private store:Store<AppState>
  ) { }

  saveCompetitions(competitions:CompetitionCard[]){
    console.log("guardando las competiciones en el store")
    this.store.dispatch(loadedCompetitions({competitions}))
  }

  setCurrent(competitionCode:string){
      this.store.dispatch(currentCompetition({current:competitionCode}))
  }

  getCurrent(){
    return new Observable((observer)=>{
      this.store.pipe(select(selectCurrentCompetition)).subscribe(
        (competition)=>{
          observer.next(competition);
        },
        (error)=>{
          observer.error(error);
        }
      )
    })
  }
  getAll(){
    return new Observable((observer)=>{
      this.store.pipe(select(selectCompetitionsList)).subscribe(
      (list)=>{
        observer.next(list);
      },
      (error)=>{
        observer.error(error);
      }
      )
    })

  }
  getOne(competitionCode:string){
    this.store.pipe(select(selectCompetitionsList)).subscribe((list)=>{
      console.log("La lista de equipos es: ",list,"el tipo es: ",typeof list);
    })
  }
  getTeam(teamCode:number){
    return new Observable();
  }
}
