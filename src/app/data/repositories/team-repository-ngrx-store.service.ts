import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/interfaces/competitioniterfaces';
import { loadPopular, loadTeam, loadedTeams } from '../../store/actions/teams.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { selectTeamsList, selectedTeam, popularTeams } from '../../store/selectors/teams.selectors';
import { Observable } from 'rxjs';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';

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
