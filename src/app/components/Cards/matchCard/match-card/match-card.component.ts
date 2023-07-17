import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {

  @Input() match:MatchEntity;
  constructor() {
    this.match = new MatchEntity({});
   }

  ngOnInit(): void {
  }

}
