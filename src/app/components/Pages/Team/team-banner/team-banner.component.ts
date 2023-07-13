import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-team-banner',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './team-banner.component.html',
  styleUrls: ['./team-banner.component.scss']
})
export class TeamBannerComponent implements OnInit {

  team:TeamEntity;
  constructor(private teamM: TeamManagerService) {
    this.team = new TeamEntity({});
   }

  ngOnInit(): void {
    this.teamM.getCurrent().subscribe(
      (team)=>{
        console.log("el equipo: ",team)
        this.team = team;
      }
    )
  }

}
