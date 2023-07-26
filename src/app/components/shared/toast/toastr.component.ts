import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toastr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
   @Input() active:string="desactivated";
   @Input() message:string = "";
  constructor(

  ) { }

  ngOnInit(): void {
  }

  activateToast(active:string){
    this.active = active
  }

}
