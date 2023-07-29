import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

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
  isLogged$= new Observable<boolean>();
  breakpointMedium:boolean = false;

  constructor(
    private userM: UserManagerService,
    private sessionM: SessionManagerService,
    private breakointObserver: BreakpointObserver
  ) { }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged();
    this.breakointObserver.observe("(min-width:1200px)").subscribe({
      next:(result)=>{
        console.log("El breakpoint es: ",result)
        this.breakpointMedium=result.matches;
      }
    })
  }

  signOut(){
    this.sessionM.logOut();
  }

}
