import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { CompetitionCard } from 'src/app/models/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CompetitionCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  competitions:CompetitionCard[] = [
    {
      name:"Premier League",
      image:"https://crests.football-data.org/PL.png",
      code:"PL",
      id:2021
    },
    {
      name:"Campeonato Brasileiro Série A",
      image:"https://crests.football-data.org/764.svg",
      code:"BSA",
      id:213
    },
    {
      name:"UEFA Champions League",
      image:"https://crests.football-data.org/CL.png",
      code:"CL",
      id:2001
    },
    {
      name:"Copa Libertadores",
      image:"https://crests.football-data.org/CLI.svg",
      code:"CLI",
      id:2152
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
