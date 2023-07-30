import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLinkComponent } from 'src/app/components/shared/button-link/button-link.component';
import { RouterModule } from '@angular/router';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { Observable } from 'rxjs';
import { AuthComponent } from 'src/app/components/auth/auth.component';

@Component({
  selector: 'app-navbar-small-size',
  standalone: true,
  imports: [
    CommonModule,
    ButtonLinkComponent,
    RouterModule,
    AuthComponent
  ],
  templateUrl: './navbar-small-size.component.html',
  styleUrls: ['./navbar-small-size.component.scss']
})
export class NavbarSmallSizeComponent implements OnInit {

  @Input() isSmall:boolean = true;
  @Output() openMenu= new EventEmitter<boolean>();
  isLogged$ = new Observable<boolean>();
  constructor(
    private userM: UserManagerService
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged();
  }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

}
