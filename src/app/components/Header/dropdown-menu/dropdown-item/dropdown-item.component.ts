import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItem } from 'src/app/models/interfaces/dtoInterfaces';

@Component({
  selector: 'app-dropdown-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {

  @Input() item:DropdownItem;
  constructor() {
    this.item = {
      image:"",
      name:""
    };
   }

  ngOnInit(): void {
  }

}
