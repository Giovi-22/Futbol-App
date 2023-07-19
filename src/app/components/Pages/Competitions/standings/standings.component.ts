import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Standing, Table } from 'src/app/models/interfaces/competitioniterfaces';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  @Input() standing:Table[];

  constructor() {
    this.standing =[];
   }

  ngOnInit(): void {
  }

}
