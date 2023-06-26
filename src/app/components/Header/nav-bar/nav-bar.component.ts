import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showMenu:boolean=false;
  @Output() openMenu= new EventEmitter<boolean>();

  constructor() { }

  setMenu(value:boolean){
    this.openMenu.emit(value);
  }

  ngOnInit(): void {
  }

}
