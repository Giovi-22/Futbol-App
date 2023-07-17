import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { Observable } from 'rxjs';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CompetitionCardComponent,TeamCardComponent],
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
    this.competitions$ = this.competitionM.getCompetitions();
    this.teamM.setPopularTeams();
    this.teams$ = this.teamM.getPopularTeams()
  }
}

