import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() item = new EventEmitter<string>();
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
    this.item.emit(item)
  }

}
