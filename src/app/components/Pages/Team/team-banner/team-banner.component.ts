import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';

@Component({
  selector: 'app-team-banner',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './team-banner.component.html',
  styleUrls: ['./team-banner.component.scss']
})
export class TeamBannerComponent implements OnInit {

  team:TeamEntity;

  constructor(
    private teamM: TeamManagerService,
    ) {
    this.team = new TeamEntity({});
   }

  ngOnInit(): void {
    this.teamM.getStoreCurrent().subscribe(
      (team)=>{
        this.team = team;
      }
    )
  }

}
