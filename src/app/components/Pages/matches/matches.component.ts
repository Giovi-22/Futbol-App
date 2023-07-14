import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { Observable } from 'rxjs';
import { MatchEntity } from 'src/app/models/entities/MatchEntity';
import { MatchCardComponent } from '../../Cards/matchCard/match-card/match-card.component';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches$ = new Observable<MatchEntity[]>;

  constructor(
    private competitionM: CompetitionManagerService
  ) { }

  ngOnInit(): void {
  this.competitionM.getCurrentCompetition().subscribe(
    (result)=>{
      this.competitionM.addMatches(result);
    }
  );
  this.matches$ = this.competitionM.getMatches();
  
  }

}
