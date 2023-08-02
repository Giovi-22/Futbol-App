import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Positions } from 'src/app/models/interfaces/dtoInterfaces';
import { PlayerCardComponent } from '../Cards/player-card/player-card.component';


@Component({
  selector: 'app-football-field',
  standalone: true,
  imports: [
    CommonModule,
    PlayerCardComponent
  ],
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.scss']
})
export class FootballFieldComponent implements OnInit, OnChanges {

  @Input() positions!:Positions;

  
  constructor() { }

  ngOnChanges(change:SimpleChanges): void {
    if(change['positions']){
      const result = {...change['positions'].currentValue};
      this.positions['Goalkeeper'] = [...result['Goalkeeper']];
      this.positions['Defence'] = [...result['Defence']];
      this.positions['Midfield'] = [...result['Midfield']];
      this.positions['Offence'] = [...result['Offence']];
    }
  }

  ngOnInit(): void {
    console.log("Las posiciones en football field component: ",this.positions)
  }
}
