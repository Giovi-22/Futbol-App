import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competition-card',
  standalone: true,
  templateUrl: './competitionCard.component.html',
  styleUrls: ['./competitionCard.component.scss']
})
export class CompetitionCardComponent implements OnInit {
  /*@Input() cardDetails:CompetitionCard={
    name:"",
    image:"",
    code:"",
    id:0
  }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
