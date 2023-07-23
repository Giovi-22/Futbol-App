import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamBannerComponent } from '../team-banner/team-banner.component';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { FootballFieldComponent } from 'src/app/components/football-field/football-field.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TeamCardComponent,
    TeamBannerComponent,
    FootballFieldComponent
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team$ = new Observable<TeamEntity>();

  constructor(private teamM: TeamManagerService) { 
  }

  ngOnInit(): void {
    this.team$ = this.teamM.getStoreCurrent();
  }

}