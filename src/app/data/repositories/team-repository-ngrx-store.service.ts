import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { loadedTeams } from '../state/actions/teams.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectTeamsList } from '../state/selectors/teams.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamRepositoryNgrxStoreService {

  constructor(
    private store: Store<AppState>
  ) { }

  saveTeams(teams:Team[]){
    console.log("guardando los equipos en el store")
    this.store.dispatch(loadedTeams({teams}))
  }

  getTeams(){
   return new Observable<Team[]>((observer)=>{
    this.store.select(selectTeamsList).subscribe(
      (value)=>{observer.next(value)}
     )
   })

  }
}
