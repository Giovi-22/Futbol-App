import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserManagerService } from 'src/app/domain/managers/user-manager.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogged$= new Observable<boolean>();
  breakpointMedium:boolean = false;

  constructor(
    private breakointObserver: BreakpointObserver,
    private userM: UserManagerService,
    private sessionM: SessionManagerService
    
  ) { }

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
