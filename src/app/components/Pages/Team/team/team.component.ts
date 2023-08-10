import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamBannerComponent } from '../team-banner/team-banner.component';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { FootballFieldComponent } from 'src/app/components/football-field/football-field.component';
import { Positions } from 'src/app/models/interfaces/dtoInterfaces';
import PlayerEntity from 'src/app/domain/entities/PlayerEntity';
import { PlayerCardComponent } from 'src/app/components/Cards/player-card/player-card.component';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TeamCardComponent,
    TeamBannerComponent,
    FootballFieldComponent,
    PlayerCardComponent
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  team:TeamEntity;
  players!:PlayerEntity[];
  isPositions:boolean = false;
  positions:Positions={
    Goalkeeper:[],
    Defence:[],
    Midfield:[],
    Offence:[],
    Reserva:[]
  }
  playersIdList!:number[];

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
          this.players = result.squad.map(player => new PlayerEntity({
            dateOfBirth: player.dateOfBirth.toString(),
            id:player.id,
            name:player.name,
            nationality:player.nationality,
            position:player.position,
            shirtNumber: null
          }));
          this.positions['Goalkeeper']= this.players.filter(player => player.position.includes('Goalkeeper'));
          this.positions['Defence']= this.players.filter(player => player.position.includes('Defence'));
          this.positions['Midfield']= this.players.filter(player => player.position.includes('Midfield'));
          this.positions['Offence']= this.players.filter(player => player.position.includes('Offence'));
          this.isPositions = true;
      }
    }
    })

  }

  ngOnDestroy(): void {

  }

}