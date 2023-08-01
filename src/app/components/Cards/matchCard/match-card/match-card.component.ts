import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import * as moment from 'moment';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {

  @Input() match:MatchEntity;
  @Input() competition:CompetitionEntity;
  matchDay:string = "";
  matchHour:string ="";

  constructor() {
    this.match = new MatchEntity({});
    this.competition = new CompetitionEntity({
      code:"",
      id:0,
      logo:"",
      name:""
    });
   }

  ngOnInit(): void {
    if(this.match){
      this.matchDay = moment(this.match.utcDate).format('DD/MM/YYYY');
      this.matchHour = moment(this.match.utcDate).format('HH:mm');
    }
  }

}
