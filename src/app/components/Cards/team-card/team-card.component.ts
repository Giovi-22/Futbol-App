import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
  
})
export class TeamCardComponent implements OnInit {

  @Input() teamData:TeamEntity = new TeamEntity({});
  isLogged$ = new Observable<boolean>();

  constructor(
    private router:Router,
    private teamM: TeamManagerService,
    private userM: UserManagerService
    ) { 
    
  }

  navigateTo(tid:number){
    this.teamM.findApiTeam(tid);
    this.router.navigate([`/team`]);
    console.log("va a buscar los datos")
  }


  ngOnInit(): void {
   this.isLogged$ = this.userM.userIsLogged();
  }

}
