import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { LogIn } from 'src/app/models/interfaces/session.interfaces';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLogged:string="desactivated";
  toastMessage:string = "";
  formSession!:FormGroup;
  constructor(
    private fb: FormBuilder, 
    private sessionM: SessionManagerService,
    private router:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.formSession = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]]
    });
  }

  onSubmit(){
    const session:LogIn = {
      email: this.formSession.get("email")?.value,
      password: this.formSession.get("password")?.value
    }
    this.sessionM.logIn(session).subscribe({
      next:(result)=>{
        this.toastr.success("Log-in successfully","Login",{closeButton:true,easing:"ease-in"}); 
        console.log("Redirigiendo...")
      },
      error:(error)=>{
        console.log("llega hasta el componente",error)
        this.toastr.error(`Error: ${error.status}`,"Login failed!",{closeButton:true,easing:"ease-in"});
      }
    });
    
  }

}
