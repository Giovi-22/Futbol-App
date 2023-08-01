import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';

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

  }

}
