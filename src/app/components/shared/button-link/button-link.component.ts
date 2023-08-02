import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit, OnChanges {
  @Input() type:string = "primary";
  @Input() title:string = " ";
  @Input() navigateTo:string="";
  @Input() isSelected:boolean = false;
  breakpointSmall:boolean = false;
  buttonClasses = {
    type:"btn btn-outline-secondary",
    size:""
  }
  
  constructor(
    private breakointObserver : BreakpointObserver
  ) { }

  ngOnInit(): void {
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
  getClasses(){
    return `${this.buttonClasses.type} ${this.buttonClasses.size}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isSelected']){
      if(changes['isSelected'].currentValue){
        this.buttonClasses.type="btn btn-secondary"     
      }else{
        this.buttonClasses.type="btn btn-outline-secondary"   
      }

  }

}
}
