import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,RouterModule,TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team$ = new Observable<TeamEntity>();

  constructor(private teamM: TeamManagerService) { 
  }

  ngOnInit(): void {
    this.team$ = this.teamM.getCurrent()
  }

}