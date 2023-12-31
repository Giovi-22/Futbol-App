import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatchEntity } from 'src/app/domain/entities/MatchEntity';
import { MatchCardComponent } from '../../Cards/matchCard/match-card/match-card.component';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';

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
  this.competitionM.getCurrent().subscribe(
    (result)=>{
      this.competitionM.findMatches(result);
    }
  );
  this.matches$ = this.competitionM.getMatches();
  
  }

}
