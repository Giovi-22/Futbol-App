import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { CompetitionCard, TeamCard } from 'src/app/models/storeModelsInterfaces';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CompetitionCardComponent,TeamCardComponent],
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
teams:TeamCard[]=[
  {
  name:"Fluminense FC",
  image: "https://crests.football-data.org/1765.svg",
  tla: "FLU",
  areaName: "Brazil",
  areaCode: "BRA",
  id: 1765
},
{
  name:"Borussia Dortmund",
  image: "https://crests.football-data.org/4.png",
  tla: "BVB",
  areaName: "Germany",
  areaCode: "DEU",
  id: 1765
},
{
  name:"Real Madrid CF",
  image: "https://crests.football-data.org/86.png",
  tla: "RMA",
  areaName: "Spain",
  areaCode: "ESP",
  id: 86
},
{
  name:"Sporting Clube de Portugal",
  image: "https://crests.football-data.org/498.png",
  tla: "SPO",
  areaName: "Portugal",
  areaCode: "POR",
  id: 498
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
