import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges{

  team:Team;
  cambio:boolean = false;

  constructor() {
    this.team = {};
   }

  ngOnInit(): void {
  }

  setChange(change:boolean){
    this.cambio = change;
    console.log("El valor de cambio es: ",this.cambio)
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log("hubo un cambio: ",changes)
    
  }

}
