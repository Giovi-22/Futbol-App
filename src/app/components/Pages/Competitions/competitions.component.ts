import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../Cards/team-card/team-card.component';
import { CompetitionManagerService } from 'src/app/services/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/services/managers/team-manager.service';
import { Team } from 'src/app/models/interfaces/competitionInterfaces';
import { Subscription } from 'rxjs';
import { TeamEntity } from 'src/app/models/entities/TeamEntity';


@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule,TeamCardComponent],
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit, OnDestroy {

  @Input() cambio:boolean = false;
  teams: TeamEntity[];
  teamSubscription:Subscription = new Subscription();
  competitionSubscription:Subscription = new Subscription();

  constructor(
    private competitionM: CompetitionManagerService,
    private teamM: TeamManagerService
    ) {
    this.teams = [];
  }


  ngOnInit(): void {
    console.log("dentro del inicio del componente")
    this.competitionM.getCurrentCompetition().subscribe(
      (competition)=>{
        const competitionCode:any = competition;
        this.teamM.getApiTeams(competitionCode)
      }
    );
    this.teamSubscription = this.teamM.getTeams().subscribe(
      (teams)=>{
        this.teams = teams;
      },
      (error)=>{
        console.log(error)
      });

  }

  ngOnDestroy(): void {
    this.teamSubscription.unsubscribe();
    this.competitionSubscription.unsubscribe();
  }

}
