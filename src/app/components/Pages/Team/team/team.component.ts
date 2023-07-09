import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { TeamCardComponent } from 'src/app/components/Cards/team-card/team-card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule,RouterModule,TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges{

  team:Team;
  @Input() cambio:boolean = false;

  constructor() {
    this.team = {};
    console.log("El constructor")
   }
   setChange(change:boolean){
    this.cambio = change;
    console.log("El valor de cambio es: ",this.cambio)
  }
   ngOnChanges(changes: SimpleChanges): void {
    console.log("dentro de onchanges")
   }
  ngOnInit(): void {
    console.log("on init")
  }

}
