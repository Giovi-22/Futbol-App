import { Component, OnInit, Input } from '@angular/core';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';

@Component({
  selector: 'app-competition-card',
  standalone: true,
  templateUrl: './competitionCard.component.html',
  styleUrls: ['./competitionCard.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  @Input() cardData:CompetitionEntity={
    name:"",
    logo:"",
    code:"",
    id:0
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
