import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
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
