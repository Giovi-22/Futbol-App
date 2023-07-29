import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { SessionFutbolServerStrategy } from '../strategies/session/sessionFutbolServerStrategy';
import {LogIn, RestorePassword } from 'src/app/models/interfaces/session.interfaces';
import UserEntity from '../entities/UserEntity';
import { UserManagerService } from './user-manager.service';
@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  #session:SessionFutbolServerStrategy;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private userM: UserManagerService
    ) {
    this.#session = new SessionFutbolServerStrategy(this.http);
   }

   logIn(user:LogIn){
      return this.#session.logIn(user).subscribe({
         next:(response)=>{
            if(response.status.includes('success')){
               if(!(response.data.user instanceof UserEntity)){
                  localStorage.setItem('user',response.data.token);
                  this.userM.setUser(response.data.user);
                  this.userM.setUserLoggedIn(true);
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
      return this.#session.current();
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

   logOut(){
      localStorage.removeItem('user');
      this.#session.logOut().subscribe({
         next:(response)=>{
            this.toastr.success(response.message,"Log out",{closeButton:true,easing:"ease-in"});
            this.userM.setUserLoggedIn(false);
         },
         error:(error:HttpErrorResponse)=>{
            this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Log out failed!",{closeButton:true,easing:"ease-in"});
         }
      })
   }

}
