import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCard } from 'src/app/models/interfaces';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() teamData:Team;
  constructor() { 
    this.teamData = {};
  }

  ngOnInit(): void {
  }

}
