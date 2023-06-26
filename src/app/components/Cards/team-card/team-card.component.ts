import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCard } from 'src/app/models/interfaces';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() teamData: TeamCard={
    name:"",
    image: "",
    tla: "",
    areaName: "",
    areaCode: "",
    id: 0
};
  constructor() { }

  ngOnInit(): void {
  }

}
