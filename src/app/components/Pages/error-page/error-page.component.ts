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

  @Input() error:ErrorData={
    message:"",
    status:404
  }
  
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (params)=>{
        console.log(params)
        this.error.message = params.get('message') || "";
        this.error.status = Number(params.get('status')) || 0;
      }
      )
  }

}
