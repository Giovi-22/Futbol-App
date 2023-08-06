import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import UserEntity from 'src/app/domain/entities/UserEntity';
import { SpinnerComponent } from '../spinner/spinner.component';
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm!:FormGroup;
  isLoading:boolean=false;

  constructor(
    private fb: FormBuilder,
    private sessionM: SessionManagerService,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit(){
    this.isLoading = true;
    const newUser:Partial<UserEntity> ={
      email:this.signUpForm.get('email')?.value,
      firstName: this.signUpForm.get('firstName')?.value,
      lastName: this.signUpForm.get('lastName')?.value,
      password: this.signUpForm.get('password')?.value
    }
    this.sessionM.singUp(newUser).subscribe({
      next:(result)=>{
        this.isLoading = false;
         if(result.status.includes('success')){
         this.toastr.success(result.message,"Sign Up",{closeButton:true,easing:"ease-in"});
         }
      },
      error:(error:HttpErrorResponse)=>{
        this.isLoading = false;
         this.toastr.error(`Error: ${error.status}, ${error.error.message}`,"Signup failed!",{closeButton:true,easing:"ease-in"});
      }
    })
  }


}
