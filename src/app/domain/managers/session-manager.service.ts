import { Injectable } from '@angular/core';
import { SessionFutbolServerStrategy } from '../strategies/session/sessionFutbolServerStrategy';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorData, LogIn, ResponseData, RestorePassword } from 'src/app/models/interfaces/session.interfaces';
import { Observable,catchError,map } from 'rxjs';
import UserEntity from '../entities/UserEntity';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  #session:SessionFutbolServerStrategy;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.#session = new SessionFutbolServerStrategy(this.http);
   }

   logIn(user:LogIn){
      return this.#session.logIn(user).subscribe({
         next:(response)=>{
            if(response.status.includes('success')){
               if(!(response.data instanceof UserEntity)){
                  localStorage.setItem('user',response.data);
               }
               this.toastr.success(response.message,"Login",{closeButton:true,easing:"ease-in"});     
             }
         },
         error:(error:HttpErrorResponse)=>{
            this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Login failed!",{closeButton:true,easing:"ease-in"});
         }
      });
   }

   current(){
      this.#session.current().subscribe({
         next:(result)=>{
            console.log("EL usuario logueado es: ",result)
         },
         error:(error)=>{
            this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Current failed!",{closeButton:true,easing:"ease-in"});
         }
      })
   }

   singUp(user:UserEntity){
    this.#session.signUp(user).subscribe({
      next:(result)=>{
         if(result.status.includes('success')){
         this.toastr.success(result.message,"Sign Up",{closeButton:true,easing:"ease-in"});
         }
      },
      error:(error:HttpErrorResponse)=>{
         this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Signup failed!",{closeButton:true,easing:"ease-in"});
      }
    })
   }

   restorePassword(data:RestorePassword){
      if(data.password !== data.confirm){
        return this.toastr.error("The password and confirm password do not match.","Restore password failed!",{closeButton:true,easing:"ease-in"});
       }
       if(!(data.token.split(" "))?.length){
         return this.toastr.error("Token to reset the password not found.","Restore password failed!",{closeButton:true,easing:"ease-in"});
       }

      return this.#session.restorePassword(data).subscribe({
         next:(result)=>{
            if(result.status.includes('success')){
               this.toastr.success(result.message,"Password updated successfully",{closeButton:true,easing:"ease-in"});
               return;
            }
         },
         error:((error:HttpErrorResponse)=>{
            return this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Restore password failed!",{closeButton:true,easing:"ease-in"});
         })});
   }

   changePassword(email:string){
      this.#session.changePassword(email).subscribe({
         next:((result)=>{
            this.toastr.success(result.message,"Change Password",{closeButton:true,easing:"ease-in"});
         }),
         error:(error:HttpErrorResponse)=>{
            this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Change Password failed!",{closeButton:true,easing:"ease-in"});
         }
      });

   }

}
