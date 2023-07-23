import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-football-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.scss']
})
export class FootballFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
