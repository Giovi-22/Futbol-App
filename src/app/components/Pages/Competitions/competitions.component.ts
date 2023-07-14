import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { Team } from 'src/app/models/interfaces/competitioniterfaces';
import { Subscription } from 'rxjs';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';
import { CompetitionBannerComponent } from './competition-banner/competition-banner.component';
import { MatchCardComponent } from '../../Cards/matchCard/match-card/match-card.component';
import { MatchEntity } from 'src/app/models/entities/MatchEntity';
import { currentCompetition } from '../../../data/state/actions/competitions.actions';


@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [
    CommonModule,
    TeamCardComponent,
    CompetitionBannerComponent,
    MatchCardComponent
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

  constructor(
    private competitionM: CompetitionManagerService,
    private teamM: TeamManagerService
    ) {
    this.teams = [];
    this.matchs = [];
    this.currentCompetition = "";
  }

  selectedScreen(screen:string){
    this.screen = screen;
    switch(screen){
      case "teams": break;
      case "matches":
      this.competitionM.addMatches(this.currentCompetition)
      this.competitionM.getMatches().subscribe(
        (result)=> this.matchs = result
      )
    }
  }

  ngOnInit(): void {
    this.competitionM.getCurrentCompetition().subscribe(
      (competition)=>{
        this.currentCompetition = competition;
        this.teamM.getApiTeams(competition)
        this.screen="teams"
      }
    );
    this.teamSubscription = this.teamM.getTeams().subscribe(
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
