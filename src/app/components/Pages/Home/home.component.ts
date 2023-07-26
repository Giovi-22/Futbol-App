import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { Observable } from 'rxjs';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CompetitionCardComponent,
    TeamCardComponent,
    DropdownComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  competitions$ = new Observable<CompetitionEntity[]>();
  teams$ = new Observable<TeamEntity[]>();
  constructor(
    private competitionM: CompetitionManagerService,
    private teamM: TeamManagerService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    console.log("home component")
    this.competitionM.findCompetitions();
    this.competitions$ = this.competitionM.getCompetitions();
    this.teamM.setStorePopularTeams();
    this.teams$ = this.teamM.getStorePopularTeams();
  }

  navigateTo(competitionCode:string){
    this.competitionM.findCompetition(competitionCode);
    this.competitionM.findStandings(competitionCode);
    this.competitionM.findMatches(competitionCode);
    this.teamM.findApiTeams(competitionCode);
    this.router.navigate(['competitions']);
  }

  toErrorPage(){
    console.log("yendo a notfound")
    this.router.navigate(['not-found',"error"])
  }

}

