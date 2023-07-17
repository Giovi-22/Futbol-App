import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';


@Component({
  selector: 'app-competition-banner',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './competition-banner.component.html',
  styleUrls: ['./competition-banner.component.scss']
})
export class CompetitionBannerComponent implements OnInit {

  competition:any = null;
  @Output() screen = new EventEmitter();
  constructor(
    private competitionM:CompetitionManagerService
    ) 
    {}

    selectCompetitionScreen(screen:string){
      this.screen.emit(screen);
    }

  ngOnInit(): void {
    this.competitionM.getCompetition().subscribe(
      (competition)=>{
        this.competition = competition;
      }
    )
  }

}
