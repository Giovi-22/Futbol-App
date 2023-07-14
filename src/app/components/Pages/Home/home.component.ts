import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';

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
    this.teams$ = this.teamM.getTeams();
  }
}

