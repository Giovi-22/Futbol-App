import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonLinkComponent } from '../../shared/button-link/button-link.component';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';
import { AuthComponent } from '../../auth/auth.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonLinkComponent,
    AuthComponent
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

  constructor(
    private userM: UserManagerService,
    private sessionM: SessionManagerService,
  ) { 
  }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged();
  }

  signOut(){
    this.sessionM.logOut();
  }

}
