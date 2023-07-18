import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadPopular, loadTeam, loadedTeams } from '../../../store/actions/teams.actions';
import { AppState } from '@store/app.state';
import { selectTeamsList, selectedTeam, popularTeams } from '../../../store/selectors/teams.selectors';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamRepository } from './teamRepository';

@Injectable({
  providedIn: 'root'
})
export class TeamRepositoryNgrxStoreService implements TeamRepository {

  constructor(
    private store: Store<AppState>,
  ) { }

  setTeams(teams:TeamEntity[]){
    this.store.dispatch(loadedTeams({teams}))
  }

  setTeam(team: TeamEntity){
    this.store.dispatch(loadTeam({team}));
  }

  setPopularTeams(teams:TeamEntity[]){
    this.store.dispatch(loadPopular({teams}));
  }

  getCurrent(){
    return this.store.select(selectedTeam)
  }
  
  getTeams(){
   return new Observable<TeamEntity[]>((observer)=>{
    this.store.select(selectTeamsList).subscribe(
      (value)=>{observer.next(value)}
     )
   })
  }

  getPopularTeams(){
    return this.store.select(popularTeams);
  }


}
