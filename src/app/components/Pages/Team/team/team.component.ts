import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamBannerComponent } from '../team-banner/team-banner.component';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { FootballFieldComponent } from 'src/app/components/football-field/football-field.component';
import { Squad } from 'src/app/models/interfaces/competitioniterfaces';
import { Positions } from 'src/app/models/interfaces/dtoInterfaces';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TeamCardComponent,
    TeamBannerComponent,
    FootballFieldComponent
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team:TeamEntity;
  players!:Squad[];
  positions:Positions={
    Goalkeeper:[],
    Defence:[],
    Midfield:[],
    Offence:[],
    Reserva:[]
  }
  constructor(private teamM: TeamManagerService) { 
    this.team = new TeamEntity({
      area:{code:"",flag:"",id:0,name:""},
      coach:{contract:{start:"",until:null},dateOfBirth:null,firstName:"",id:null,lastName:"",name:"",nationality:null},
      id:0,
      logo:"",
      name:"",
      shortName:"",
      squad:[],
      tla:""
    })
  }

  ngOnInit(): void {
    this.teamM.getStoreCurrent().subscribe({
      next:(result)=>{
        if(result.squad?.length){
          this.players = [...result.squad];
          this.players.forEach(player=>{
            if(!player.position){
              this.positions['Reserva'].push(player)
            }
            this.positions[player.position].push(player)
          })
        }
        console.log("Las posiciones son: ",this.positions)
      }
    })
  }

}