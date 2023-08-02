import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Error } from '../models/interfaces/dtoInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router: Router
  ) { }

  dispatchError(error:Error){
    this.router.navigate(['notfound',{message:error.message,status:error.status}]);
  }
}
