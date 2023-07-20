import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonLinkComponent } from '../../shared/button-link/button-link.component';


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

  constructor() { }

  setMenu(showMenu:boolean){
    this.openMenu.emit(showMenu);
  }

  ngOnInit(): void {
  }

}
