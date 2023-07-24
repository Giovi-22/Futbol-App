import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { ButtonLinkComponent } from 'src/app/components/shared/button-link/button-link.component';
import { CompetitionEntity } from 'src/app/domain/entities/CompetitionEntity';
import { DropdownComponent } from 'src/app/components/shared/dropdown/dropdown.component';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';



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
export class CompetitionBannerComponent implements OnInit{

  competition:CompetitionEntity;
  seasons:string[];
  currentSeason:string="";

  @Output() screen = new EventEmitter();
  constructor(
    private competitionM:CompetitionManagerService,
    private teamM:TeamManagerService
    ) 
    {
      this.seasons = [
        "2022",
        "2021",
        "2020"
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

    getCompetition(season:string){
      console.log("la temporada seleccionada: ",season)
      this.competitionM.findStandings(this.competition.code,{season:season});
      this.competitionM.findMatches(this.competition.code,{season:season});
      this.teamM.findApiTeams(this.competition.code,{season:season})
      this.currentSeason = season;
    }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear().toString();
    this.seasons.unshift(currentYear);
    this.competitionM.getCompetition().subscribe(
      (competition)=>{
        this.competition = competition;
        this.currentSeason = competition.currentSeason?.startDate.split('-')[0]||"";
      }
    )
  }



}
