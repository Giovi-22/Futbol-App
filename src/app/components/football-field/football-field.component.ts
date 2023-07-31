import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Positions } from 'src/app/models/interfaces/dtoInterfaces';
import { Observable } from 'rxjs';
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
      this.positions = {...change['positions'].currentValue};
      //console.log("las positions current value son: ",change['positions'].currentValue)
    }
  }

  ngOnInit(): void {
    //console.log("las positions son: ",this.positions)
    //this.positions=this.positions;

}
}
