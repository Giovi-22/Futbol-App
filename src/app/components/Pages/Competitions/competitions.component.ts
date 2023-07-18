import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { Subscription } from 'rxjs';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { MatchCardComponent } from '../../Cards/matchCard/match-card/match-card.component';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { CompetitionBannerComponent } from './competition-banner/competition-banner.component';


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
        this.teamM.findApiTeams(competition)
        this.screen="teams"
      }
    );
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
