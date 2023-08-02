import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router: Router
  ) { }

  showError(error:string){
    this.router.navigate(['notfound',{message:"Page don't found",status:404}]);
  }
}
