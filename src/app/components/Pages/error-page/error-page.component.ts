import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorData } from 'src/app/models/interfaces/session.interfaces';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  @Input() error!:ErrorData;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params)=>{
        const parametro:any = params.get('message')
        console.log(params)
        //this.error.message = params.get('message') || "";
        //this.error.status = params.get('status') || "";
        //console.log("Los parametros del error son: ",this.error);
      }
      )
  }

}
