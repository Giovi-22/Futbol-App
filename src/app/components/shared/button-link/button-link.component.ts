import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  buttonClass:string = "btn btn-outline-secondary";
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isSelected']){
      console.log("el boton esta seleccionado",changes['isSelected'].currentValue)
      if(changes['isSelected'].currentValue){
        this.buttonClass = "btn btn-secondary";
      }else{
        this.buttonClass = "btn btn-outline-secondary";
      }

  }

}
}
