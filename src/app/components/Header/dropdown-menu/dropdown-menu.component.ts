import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { CompetitionManagerService } from 'src/app/domain/managers/competition-manager.service';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';

//---------------------------------------------------------
@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,DropdownItemComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  
  loading$:Observable<boolean> = new Observable();
  competitions$:Observable<any> = new Observable();
  selectedCode:string; 

  constructor(
    private router: Router,
    private competitionM: CompetitionManagerService,
    private teamM: TeamManagerService
    ) {
    this.selectedCode = "PL";
    
  }

  navigateTo(competitionCode:string){
    this.selectedCode = competitionCode;
    this.competitionM.setCurrent(competitionCode);
    this.competitionM.findCompetition(competitionCode);
    this.competitionM.findStandings(competitionCode);
    this.competitionM.findMatches(competitionCode);
    this.teamM.findApiTeams(competitionCode);
    this.router.navigate(['competitions']);
  }

  ngOnInit(): void {
    this.competitions$ = this.competitionM.getCompetitions();
    this.teamM.setApiStrategy('TeamfootballApi');
  }

}
