import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  
})
export class TeamCardComponent implements OnInit {
  @Input() teamData:TeamEntity = new TeamEntity({});
  
  constructor(
    private router:Router,
    private teamM: TeamManagerService
    ) { 
    
  }

  navigateTo(tid:number){
    this.teamM.getApiTeam(tid);
    this.router.navigate([`/team`]);
    console.log("va a buscar los datos")
  }


  ngOnInit(): void {
  }

}
