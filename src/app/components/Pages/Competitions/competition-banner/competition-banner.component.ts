import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { ButtonLinkComponent } from 'src/app/components/shared/button-link/button-link.component';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { DropdownComponent } from 'src/app/components/shared/dropdown/dropdown.component';


@Component({
  selector: 'app-competition-banner',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    ButtonLinkComponent,
    DropdownComponent
  ],
  templateUrl: './competition-banner.component.html',
  styleUrls: ['./competition-banner.component.scss']
})
export class CompetitionBannerComponent implements OnInit {

  competition:CompetitionEntity;
  seasons:string[];

  @Output() screen = new EventEmitter();
  constructor(
    private competitionM:CompetitionManagerService
    ) 
    {
      this.seasons = [
        "2022",
        "2021",
        "2020",
        "2019"
      ];
      this.competition = new CompetitionEntity({
        code:"",
        id:0,
        logo:"",
        name:""
      });
    }

    selectCompetitionScreen(screen:string){
      this.screen.emit(screen);
    }

  ngOnInit(): void {
    this.competitionM.getCurrent().subscribe(
      (competition)=>{
        this.competitionM.findCompetition(competition);
      }
    )
    this.competitionM.getCompetition().subscribe(
      (result)=>{
        this.competition = result;
      }
    )
  }

}
