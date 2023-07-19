import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  
  @Input() title:string = "";
  @Input() menuItems:string[] = [];
  selectedItem:string="";
  constructor() { }

  ngOnInit(): void {
    if(this.menuItems.length){
    this.selectedItem = this.menuItems[0];
    }
  }

  selectItem(item:string){
    console.log(item);
    this.selectedItem=item;
  }

}
