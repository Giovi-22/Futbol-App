import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionCard } from 'src/app/models/interfaces';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  competitions:CompetitionCard[] = [
    {
      name:"FIFA World Cup",
      image:"https://crests.football-data.org/qatar.png",
      code:"WC",
      id:2000
    },
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
      name:"Bundesliga",
      image:"https://crests.football-data.org/BL1.png",
      code:"BL1",
      id:2002
    },
    {
      name:"Eredivisie",
      image:"https://crests.football-data.org/ED.png",
      code:"DED",
      id:2003
    },
    {
      name:"Primera Division",
      image:"https://crests.football-data.org/PD.png",
      code:"PD",
      id:2014
    },
    {
      name:"Ligue 1",
      image:"https://crests.football-data.org/FL1.png",
      code:"FL1",
      id:2015
    },
    {
      name:"Championship",
      image:"https://crests.football-data.org/ELC.png",
      code:"ELC",
      id:2016
    },
    {
      name:"Primeira Liga",
      image:"https://crests.football-data.org/PPL.png",
      code:"PPL",
      id:2017
    },
    {
      name:"European Championship",
      image:"https://crests.football-data.org/EUR.svg",
      code:"EC",
      id:2018
    },
    {
      name:"Serie A",
      image:"https://crests.football-data.org/SA.png",
      code:"SA",
      id:2019
    },
    {
      name:"Copa Libertadores",
      image:"https://crests.football-data.org/CLI.svg",
      code:"CLI",
      id:2152
    }
]
  urlCompetition:string='http://api.football-data.org/v4/competitions/';
  constructor(private getApiData: FetchDataService) { }

  getData(competitionCode:string){
    this.getApiData.fetchData(`${this.urlCompetition}${competitionCode}`).subscribe({
      next:(result => console.log(result))
    })
  }

  ngOnInit(): void {
  }

}
