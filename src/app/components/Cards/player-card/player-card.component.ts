import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Squad } from 'src/app/models/interfaces/competitioniterfaces';
import PlayerEntity from 'src/app/domain/entities/PlayerEntity';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player!:PlayerEntity;
  constructor() { }

  ngOnInit(): void {
    
  }

}
