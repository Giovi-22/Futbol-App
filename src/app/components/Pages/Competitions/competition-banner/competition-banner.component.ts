import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { CompetitionEntity } from 'src/app/models/entities/CompetitionEntity';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-competition-banner',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './competition-banner.component.html',
  styleUrls: ['./competition-banner.component.scss']
})
export class CompetitionBannerComponent implements OnInit {

  competition:any = null;
  constructor(
    private competitionM:CompetitionManagerService
    ) 
    {
      
     }

  ngOnInit(): void {
    this.competitionM.getCompetition().subscribe(
      (competition)=>{
        this.competition = competition;
      }
    )
  }

}