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
        if(!result.get('jwt')){
          this.toastr.error("Error: Token to reset the password not found.","Restore password");
        }else{
          this.jwt = result.get('jwt');
        }
      }
    )
  }

  onSubmit(){
    const password = this.restorePasswordForm.get('password')?.value;
    const confirm = this.restorePasswordForm.get('confirm')?.value;
    const data:RestorePassword={
      password: password,
      confirm: confirm,
      token: this.jwt || ""
    }
    this.sessionM.restorePassword(data);
  }

}
