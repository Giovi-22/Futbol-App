import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    DropdownMenuComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu:boolean;
  breakpointLarge:boolean = false;
  breakpointSmall:boolean = false;
  breakpoint:string= "medium";

  constructor(
    private breakointObserver: BreakpointObserver
  ) { 
    this.showMenu=false
  }

  setMenu(showMenu:boolean){
    this.showMenu = showMenu;
  }

  ngOnInit(): void {
    this.breakointObserver.observe(["(min-width:1200px)","(max-width:660px)"]).subscribe({
      next:(result)=>{
        this.breakpointSmall = result.breakpoints["(max-width:660px)"];
        this.breakpointLarge = result.breakpoints["(min-width:1200px)"];
        if(this.breakpointSmall){
        return this.breakpoint = "small"
        }
        return this.breakpoint = "large"
      }
    
    })
  }

}
