import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../state/app.state';
import { currentCompetition, loadMatches, loadedCompetitions, saveCompetition } from '../state/actions/competitions.actions';
import { matchesList, selectCompetition, selectCompetitionsList, selectCurrentCompetition } from '../state/selectors/competitions.selectors';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { MatchEntity } from 'src/app/models/entities/MatchEntity';


@Injectable({
  providedIn: 'root'
})
export class CompetitionRepositoryNgrxStoreService {

  constructor(
    private store:Store<AppState>
  ) { }

  saveCompetitions(competitions:CompetitionEntity[]){
    console.log("guardando las competiciones en el store")
    this.store.dispatch(loadedCompetitions({competitions}))
  }
  saveCompetition(competition:CompetitionEntity){
    console.log("guardando las competiciones en el store")
    this.store.dispatch(saveCompetition({competition}))
  }

  setCurrent(competitionCode:string){
      this.store.dispatch(currentCompetition({current:competitionCode}))
  }
  addMatches(matches:MatchEntity[]){
    this.store.dispatch(loadMatches({matches}))
  }

  getCurrent(){
    return this.store.select(selectCurrentCompetition);
  }

  getCompetitions(){

      return this.store.select(selectCompetitionsList);
      
  }
  getCompetition(){
    return this.store.select(selectCompetition)
  }

  getMatches(){
    return this.store.select(matchesList);
  }

}
