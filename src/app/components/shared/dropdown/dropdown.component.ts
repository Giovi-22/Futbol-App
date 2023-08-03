import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';

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
  breakpointSmall:boolean = false;
  buttonClasses = {
    type:"btn btn-outline-secondary dropdown-toggle",
    size:""
  }
  constructor(
    private breakointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    if(this.menuItems.length){
    this.selectedItem = this.menuItems[0];
    }

    this.breakointObserver.observe(["(max-width:660px)"]).subscribe({
      next:(result)=>{
        this.breakpointSmall = result.breakpoints["(max-width:660px)"];
        if(this.breakpointSmall){
          this.buttonClasses.size="btn-sm";
        }else{
          this.buttonClasses.size="";
        }
      }
    })
  }

  selectItem(item:string){
    this.selectedItem=item;
    this.item.emit(item)
  }

  getClasses(){
    return `${this.buttonClasses.type} ${this.buttonClasses.size}`;
  }

}
