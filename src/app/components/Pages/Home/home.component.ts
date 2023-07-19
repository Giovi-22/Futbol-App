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
    private teamM: TeamManagerService
    ) { }

  ngOnInit(): void {
    console.log("home component")
    this.competitionM.findCompetitions();
    this.competitions$ = this.competitionM.getCompetitions();
    //this.teamM.findApiTeams();
    //this.teams$ = this.teamM.getPopularTeams()
  }
}

