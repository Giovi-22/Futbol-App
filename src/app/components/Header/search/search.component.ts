import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { Router, RouterModule } from '@angular/router';
import { ISearchResult } from '@shared/models';
import { TeamDto } from 'src/app/models/interfaces/dtoInterfaces';

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
export class SearchComponent implements OnInit{
 @Input() searchResult:ISearchResult;
 @Input() teams!:TeamEntity[];
 @Output() openMenu= new EventEmitter<boolean>();
 onCloseMenu:string = "";
  constructor(
    private teamM: TeamManagerService,
    private router: Router,
    
  ) {
    this.searchResult = {
      teams:[],
      message: "",
      error:false
    }
   }

  ngOnInit(): void {
    this.onCloseMenu = "";
  }



  onSelectedTeam(team:TeamDto){
    console.log("Dentro de onSelectedTeam en el componente search")
    this.teamM.findApiTeam(team.id);
    this.openMenu.emit(false);
    this.router.navigate(['/team']);
  }


}
