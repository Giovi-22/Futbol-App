import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { loadTeam, loadedTeams } from '../state/actions/teams.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectTeamsList, selectedTeam } from '../state/selectors/teams.selectors';
import { Observable } from 'rxjs';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class TeamRepositoryNgrxStoreService {

  constructor(
    private store: Store<AppState>,
  ) { }

  saveTeams(teams:Team[]){
    console.log("guardando los equipos en el store")
    this.store.dispatch(loadedTeams({teams}))
  }

  getTeam(teamCode:number){
    return new Observable<Team>((observer)=>{
      this.store.select(selectedTeam).subscribe(
        (team)=>{
          observer.next(team);
        },
        (error)=>{
          console.log(error);
        }
      )
    })   
  }

  getTeams(){
   return new Observable<Team[]>((observer)=>{
    this.store.select(selectTeamsList).subscribe(
      (value)=>{observer.next(value)}
     )
   })
  }

  getCurrent(){
    return new Observable<Team>(
      (observer)=>{
        this.store.select(selectedTeam).subscribe(
          (team)=>{
            observer.next(team)
          }
        )
    })
  }
}
