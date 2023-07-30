import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogged$= new Observable<boolean>();
  breakpoint:boolean = false;

  constructor(
    private breakointObserver: BreakpointObserver,
    private userM: UserManagerService,
    private sessionM: SessionManagerService
    
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.userM.userIsLogged();
    this.breakointObserver.observe("(min-width:850px)").subscribe({
      next:(result)=>{
        console.log("El breakpoint es: ",result)
        this.breakpoint=result.matches;
      }
    })
  }

  signOut(){
    this.sessionM.logOut();
  }


}
