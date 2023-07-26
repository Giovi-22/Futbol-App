import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { RestorePassword } from 'src/app/models/interfaces/session.interfaces';

@Component({
  selector: 'app-restore-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

  restorePasswordForm!:FormGroup;
  jwt:string|null= "";

  constructor(
    private fb: FormBuilder, 
    private router:Router,
    private activateRoute: ActivatedRoute,
    private sessionM: SessionManagerService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.restorePasswordForm = this.fb.group({
      password:["",[Validators.required,,Validators.minLength(8)]],
      confirm:["",[Validators.required,Validators.minLength(8)]]
    });
    this.activateRoute.paramMap.subscribe(
      (result)=>{
        console.log("El resultado de paramMap es: ",result)
        if(!result.get('jwt')){
          this.router.navigate(['notfound',"no se ha proporcionado un token para restablecer la contraseña"])
        }else{
          this.jwt = result.get('jwt');
        }
      }
    )
  }

  onSubmit(){
    const datos:RestorePassword={
      password: this.restorePasswordForm.get('password')?.value,
      confirmedPassword: this.restorePasswordForm.get('confirm')?.value,
      token: this.jwt || ""
    }
    this.sessionM.restorePassword(datos).subscribe({
      next:(result)=>{
        
        this.toastr.success(result.message,"Password changed",{closeButton:true,easing:"ease-in"});
        
        console.log("el resultado es: ",result)
      },
      error:(error)=>{
        console.log("El error es: ",error);
        this.toastr.error(error.error.message,"Change Password failed!",{closeButton:true,easing:"ease-in"});
      }
    })
  }

}
