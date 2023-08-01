import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 @Input() teams!:TeamEntity[];
 @Output() openMenu= new EventEmitter<boolean>();
  constructor(
    private teamM: TeamManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSelectedTeam(team:TeamEntity){
    console.log("El equipo seleccionado es: ",team)
    this.teamM.findApiTeam(team.id);
    this.openMenu.emit(false);
    this.router.navigate(['/team']);
  }


}
