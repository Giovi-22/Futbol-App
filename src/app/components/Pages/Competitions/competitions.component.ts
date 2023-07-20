import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { Observable, Subscription } from 'rxjs';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { MatchCardComponent } from '../../Cards/matchCard/match-card/match-card.component';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { CompetitionBannerComponent } from './competition-banner/competition-banner.component';
import { Standing, Table } from 'src/app/models/interfaces/competitioniterfaces';
import { StandingsComponent } from './standings/standings.component';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';


@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [
    CommonModule,
    TeamCardComponent,
    CompetitionBannerComponent,
    MatchCardComponent,
    StandingsComponent
  ],
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit, OnDestroy {

  @Input() cambio:boolean = false;
  teams: TeamEntity[];
  matchs: MatchEntity[];
  teamSubscription:Subscription = new Subscription();
  competitionSubscription:Subscription = new Subscription();
  screen:string ="teams";
  currentCompetition:string;
  standings: Table[];
  competition:CompetitionEntity;

  constructor(
    private competitionM: CompetitionManagerService,
    private teamM: TeamManagerService
    ) 
    {
    this.competition = new CompetitionEntity({
        code:"",
        id:0,
        logo:"",
        name:""
      });
    this.teams = [];
    this.matchs = [];
    this.currentCompetition = "";
    this.standings = [];
  }

  selectedScreen(screen:string){
    this.screen = screen;
    switch(screen){
      case "teams": break;
      case "standings":
        this.competitionM.getStandings().subscribe(
          (result)=>{
            this.standings = result[0].table;
          }
        );         
          break;
      case "matches":
        this.competitionM.getMatches().subscribe(
          (result)=> this.matchs = result
        )
        break;
      default: throw new Error("Se ha seleccionado una pantalla incorrecta");
    }
  }

  ngOnInit(): void {
    this.screen="teams"
    this.competitionM.getCurrent().subscribe(
      (competition)=>{
        this.currentCompetition = competition;
      }
    );
    this.competitionM.getCompetition().subscribe(
      (result)=>{
        this.competition = result;
      }
    )
    this.teamSubscription = this.teamM.getStoreTeams().subscribe(
      (teams)=>{
        this.teams = teams;
      },
      (error)=>{
        console.log(error)
      });

  }

  ngOnDestroy(): void {
    this.teamSubscription.unsubscribe();
    this.competitionSubscription.unsubscribe();
  }

}
