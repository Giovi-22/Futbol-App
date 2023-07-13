import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionCardComponent } from '../../Cards/competitionCard/competitionCard.component';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CompetitionCardComponent,TeamCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  competitions:CompetitionEntity[] = [];

  constructor(private competitionM: CompetitionManagerService) { }

  ngOnInit(): void {
    this.competitionM.saveCompetitions();
    this.competitionM.getCompetitions().subscribe(
      (result)=>{
        this.competitions = result;
      }
    );
  }

}
