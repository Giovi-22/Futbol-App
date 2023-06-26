import { Component, OnInit, Input } from '@angular/core';
import { CompetitionCard } from 'src/app/models/interfaces';

@Component({
  selector: 'app-competition-card',
  standalone: true,
  templateUrl: './competitionCard.component.html',
  styleUrls: ['./competitionCard.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  @Input() cardData:CompetitionCard={
    name:"",
    image:"",
    code:"",
    id:0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
