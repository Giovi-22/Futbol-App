import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { TeamCard } from 'src/app/models/storeModelsInterfaces';
import { Competition, Team } from 'src/app/models/interfaces/competitionInterfaces';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule,TeamCardComponent],
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit, OnChanges {
  competitionCode:string;
  urlCompetition:string='https://api.football-data.org/v4/competitions/';
  teams: Team[];
  selectedCode:string = "";
  @Input() cambio:boolean = false;
  constructor(private route: ActivatedRoute, private fetchApiData: FetchDataService) {
    this.competitionCode = "PL";
    this.teams = [];
   
  }
  ngOnChanges(changes: SimpleChanges): void {
console.log("Dentro de onchanges en competitions")
  }

  ngOnInit(): void {
    console.log("dentro del inicio del componente")
    
    this.route.url.subscribe({
      next:((value)=>{      
        if(!value[1].path){
          return console.log("Error: no se encuentra el codigo")
        }
        this.competitionCode = value[1].path;
        this.cambio = !this.cambio;
      }),
      error(error){
        console.log("el error es: ",error)
      }
    })
    this.fetchApiData.fetchData(`${this.urlCompetition}${this.competitionCode}/teams`).subscribe({
      next:((result) => result.teams?.map(team=>this.teams.push(team)))
    })
  }

}
