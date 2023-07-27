import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonLinkComponent } from '../../shared/button-link/button-link.component';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';
import UserEntity from 'src/app/domain/entities/UserEntity';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonLinkComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  showMenu:boolean=false;
  @Output() openMenu= new EventEmitter<boolean>();
  isLogged$= new Observable<boolean>();
  constructor(
    private userM: UserManagerService,
    private sessionM: SessionManagerService,
    private toastr: ToastrService
  ) { }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged()
  }

  signOut(){
    this.sessionM.logOut();
  }

}
