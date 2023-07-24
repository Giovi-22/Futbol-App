import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Positions } from 'src/app/models/interfaces/dtoInterfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-football-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.scss']
})
export class FootballFieldComponent implements OnInit, OnChanges {

  @Input() posiciones!:Positions;
  
  constructor() { }

  ngOnChanges(change:SimpleChanges): void {
    if(change['posiciones']){
      this.posiciones = {...change['posiciones'].currentValue};
      //console.log("las posiciones current value son: ",change['positions'].currentValue)
    }
  }

  ngOnInit(): void {
    //console.log("las posiciones son: ",this.positions)
    //this.posiciones=this.positions;

}
}
