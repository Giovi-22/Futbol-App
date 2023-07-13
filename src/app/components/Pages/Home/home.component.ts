import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { CompetitionCard, TeamCard } from 'src/app/models/storeModelsInterfaces';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';

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
      crest:"https://crests.football-data.org/PL.png",
      code:"PL",
      id:2021
    },
    {
      name:"Campeonato Brasileiro Série A",
      crest:"https://crests.football-data.org/764.svg",
      code:"BSA",
      id:213
    },
    {
      name:"UEFA Champions League",
      crest:"https://crests.football-data.org/CL.png",
      code:"CL",
      id:2001
    },
    {
      name:"Copa Libertadores",
      crest:"https://crests.football-data.org/CLI.svg",
      code:"CLI",
      id:2152
    }
]
teams:TeamEntity[]=[
  {
  name:"Fluminense FC",
  shortName:"Fluminense",
  logo: "https://crests.football-data.org/1765.svg",
  tla: "FLU",
  id: 1765
},
{
  name:"Borussia Dortmund",
  shortName:"Dortmund",
  logo: "https://crests.football-data.org/4.png",
  tla: "BVB",
  id: 4
},
{
  name:"Real Madrid CF",
  shortName:"Madrid",
  logo: "https://crests.football-data.org/86.png",
  tla: "RMA",
  id: 86
},
{
  name:"Sporting Clube de Portugal",
  shortName:"Sporting",
  logo: "https://crests.football-data.org/498.png",
  tla: "SPO",
  id: 498
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
