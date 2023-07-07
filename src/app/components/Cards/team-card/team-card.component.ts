import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() teamData:Team;
  constructor(private router:Router) { 
    this.teamData = {};
  }

  navigateTo(tid:number){
    this.router.navigate([`/team/${tid}`]);
  }

  ngOnInit(): void {
  }

}
