import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {
  @Input() type:string = "primary";
  @Input() title:string = " ";
  @Input() navigateTo:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
