import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import { currentCompetition, loadMatches, loadStandings, loadedCompetitions, saveCompetition } from '../../../store/actions/competitions.actions';
import { matchesList, selectCompetition, selectCompetitionsList, selectCurrentCompetition, standingsList } from '../../../store/selectors/competitions.selectors';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { Standing } from 'src/app/models/interfaces/competitioniterfaces';
import { CompetitionRepository } from 'src/app/models/interfaces/repositories/competitionRepository.interface';


@Injectable({
  providedIn: 'root'
})
export class CompetitionRepositoryNgrxStoreService implements CompetitionRepository{

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

  addStandings(standings:Standing[]){
    this.store.dispatch(loadStandings({standings}));
  }

  getCurrent(){
    return this.store.select(selectCurrentCompetition);
  }

  getCompetitions(){
      return this.store.select(selectCompetitionsList);
  }
  getCompetition(){
    return this.store.select(selectCompetition);
  }

  getMatches(){
    return this.store.select(matchesList);
  }

  getStandings(){
    return this.store.select(standingsList);
  }



}
