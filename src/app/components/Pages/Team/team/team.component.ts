import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { Observable, map } from 'rxjs';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';
import { Squad } from '../../../../models/interfaces/dtoInterfaces';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,RouterModule,TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team:TeamEntity;
  //team$ = new Observable<Array<any>();
  @Input() cambio:boolean = false;

  constructor(private teamM: TeamManagerService) { 
    this.team = new TeamEntity({});
  }

   setChange(change:boolean){
    this.cambio = change;
    console.log("El valor de cambio es: ",this.cambio)
  }

  ngOnInit(): void {
    console.log("on init team")
  
    this.teamM.getCurrent().subscribe(
      (team)=>{
        console.log("dentro del init; ",team)
        this.team = team;
      }
    )
    
  
  }
    /*
    this.teamM.getCurrent().subscribe(
      (result)=>console.log("EL equipo: ",result)
    );
    */
    /*
    this.teamM.getCurrent().subscribe(
      (result)=>{
        this.team = result;
        console.log("el equipo es: ",result)
        */
  }

