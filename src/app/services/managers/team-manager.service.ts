import { Injectable } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { TeamRepositoryNgrxStoreService } from 'src/app/data/repositories/team-repository-ngrx-store.service';


@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {
  #urlCompetition:string='https://api.football-data.org/v4/competitions/';

  constructor(
    private apiHttp: FetchDataService,
    private teamRepository: TeamRepositoryNgrxStoreService
  ) { }


  getApiTeams(competitionCode:string ="PL"){
    this.apiHttp.fetchData(`${this.#urlCompetition}${competitionCode}/teams`).subscribe({
      next:((result) =>
      {
        this.teamRepository.saveTeams(result.teams||[]);
      })
      })
  }
  getTeamsList(){
    return this.teamRepository.getTeams();
  }
}
