import { Component, OnInit, Input } from '@angular/core';
import { CompetitionCard } from 'src/app/models/storeModelsInterfaces';

@Component({
  selector: 'app-competition-card',
  standalone: true,
  templateUrl: './competitionCard.component.html',
  styleUrls: ['./competitionCard.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  @Input() cardData:CompetitionCard={
    name:"",
    crest:"",
    code:"",
    id:0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
