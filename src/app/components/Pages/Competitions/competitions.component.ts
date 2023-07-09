import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { TeamCard } from 'src/app/models/storeModelsInterfaces';
import { Competition, Team } from 'src/app/models/interfaces/competitionInterfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/data/state/app.state';
import { loadTeams, loadedTeams } from 'src/app/data/state/actions/teams.actions';
import { selectLoadingTeams, selectTeamsList } from 'src/app/data/state/selectors/teams.selectors';
import { CompetitionManagerService } from 'src/app/services/competition-manager.service';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule,TeamCardComponent],
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit, OnChanges {
  competitionCode:any;
  urlCompetition:string='https://api.football-data.org/v4/competitions/';
  //teams$:Observable<any> = new Observable();
  teams$:Array<any> = [];

  selectedCode:string = "";
  @Input() cambio:boolean = false;
  constructor(
    private route: ActivatedRoute, 
    private fetchApiData: FetchDataService,
    private store: Store<AppState>,
    private competitionM: CompetitionManagerService
    ) {
    this.competitionCode = "PL";
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Dentro de onchanges en competitions")
  }

  ngOnInit(): void {
    console.log("dentro del inicio del componente")
    this.competitionM.getCurrentCompetition().subscribe(
      (competition)=>{
        this.competitionCode = competition;
        this.fetchApiData.fetchData(`${this.urlCompetition}${this.competitionCode}/teams`).subscribe({
          next:((result) =>
          {
          this.teams$ = result.teams || [];
          const teamsArray:Team[]=result.teams?.map(team =>team) || [];
          this.store.dispatch(loadedTeams({teams:teamsArray}))
          })
          })
      }
    );
    
    //this.teams$ = this.store.select(selectTeamsList);
  }

}
