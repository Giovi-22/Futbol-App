import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonLinkComponent } from '../../shared/button-link/button-link.component';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';
import { AuthComponent } from '../../auth/auth.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeamManagerService } from 'src/app/domain/managers/team-manager.service';
import { TeamEntity } from 'src/app/domain/entities/TeamEntity';
import { SearchComponent } from '../search/search.component';
import { environment } from '@environment';
import { ISearchResult } from '@shared/models';
import { SpinnerComponent } from '../../spinner/spinner.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonLinkComponent,
    AuthComponent,
    ReactiveFormsModule,
    SearchComponent,
    SpinnerComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  showMenu:boolean=false;
  @Output() openMenu= new EventEmitter<boolean>();
  @Input() isLarge:boolean=true;
  @Input() isSmall:boolean=true;
  isLogged$= new Observable<boolean>();
  searchField!:FormGroup;
  searchResult:ISearchResult;
  findedTeams:TeamEntity[] = [];
  openSearch:boolean = false;
  isLoadding:boolean = false;
  
  constructor(
    private userM: UserManagerService,
    private sessionM: SessionManagerService,
    private fb: FormBuilder,
    private teamM: TeamManagerService,
  ) { 
    this.searchResult = {
      teams:[],
      message:"",
      error:false
    }
  }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged();
    this.searchField = this.fb.group({
      search:[''],
    })

  }

  signOut(){
    this.sessionM.logOut();
  }

  onSearch(){
    this.isLoadding = true;
    this.teamM.setApiStrategy('TeamServer');
    const teamName = this.searchField.get('search')?.value
    this.teamM.searchTeam(teamName).subscribe({
      next:((result)=>{
        this.searchResult.teams = result;
        this.searchResult.error = false;
        this.teamM.setApiStrategy(environment.api_teamStrategy);
        this.openSearch = true;
        this.isLoadding = false;
      }),
      error:((error)=>{
        console.log("El error es: ",error)
        this.searchResult.teams = [],
        this.searchResult.error = true,
        this.searchResult.message = "Teams don't found"
        this.openSearch = true;
        this.isLoadding = false;
        setTimeout(()=>this.closeMenu(),2000);
        this.teamM.setApiStrategy(environment.api_teamStrategy);
      })
    })
  }

  openSearchMenu(open:boolean){
    this.openSearch = open;
  }
  closeMenu(){
    this.openSearch = false;
  }

}
