import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NavBarComponent,DropdownMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu:boolean=false;

  constructor() { }

  setMenu(value:boolean){
    this.showMenu = value;
  }

  ngOnInit(): void {
  }

}
