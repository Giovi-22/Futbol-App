import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { LogIn } from 'src/app/models/interfaces/session.interfaces';


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
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.formSession = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]]
    });
  }

  onSubmit(){
    const sessionDto:LogIn = {
      email: this.formSession.get("email")?.value,
      password: this.formSession.get("password")?.value
    }
    this.sessionM.logIn(sessionDto).subscribe({
      next:(response)=>{
        if(response.status){
          this.toastr.success(response.message,"Login",{closeButton:true,easing:"ease-in"});
          setTimeout(()=>this.router.navigate(["/"]),2000);
          console.log("Usuario logueado")        
        }
      
      },
      error:(error)=>{
        console.log("dentro de singin component")
        console.log("El error es: ",error)
        this.toastr.error(error.error.message,"Login failed!",{closeButton:true,easing:"ease-in"});
      }}
    )
    console.log("valores del form: ",this.formSession.value)
  }

}
