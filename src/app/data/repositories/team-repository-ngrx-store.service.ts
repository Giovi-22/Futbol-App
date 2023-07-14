import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { loadPopular, loadTeam, loadedTeams } from '../state/actions/teams.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectTeamsList, selectedTeam, popularTeams } from '../state/selectors/teams.selectors';
import { Observable } from 'rxjs';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';

@Injectable({
  providedIn: 'root'
})
export class TeamRepositoryNgrxStoreService {

  constructor(
    private store: Store<AppState>,
  ) { }

  saveTeams(teams:TeamEntity[]){
    console.log("guardando los equipos en el store")
    this.store.dispatch(loadedTeams({teams}))
  }

  setTeam(team:TeamEntity){
    this.store.dispatch(loadTeam({team}))
  }

  getTeams(){
   return new Observable<TeamEntity[]>((observer)=>{
    this.store.select(selectTeamsList).subscribe(
      (value)=>{observer.next(value)}
     )
   })
  }
  setPopularTeams(teams:TeamEntity[]){
    this.store.dispatch(loadPopular({teams}));
  }
  getPopularTeams(){
    return this.store.select(popularTeams);
  }
  getCurrent(){
    return this.store.select(selectedTeam)
  }

}
