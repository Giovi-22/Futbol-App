import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  email = new FormControl("");
  constructor(
    private toastr: ToastrService,
    private sessionM: SessionManagerService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email.value){
      console.log("El email es: ",this.email.value);
    this.sessionM.changePassword(this.email.value).subscribe(
      {
        next:(result)=>{
          if(result.status)
          {
          this.toastr.success(result.message,"Change Password",{closeButton:true,easing:"ease-in"});
          }
          console.log("el resultado es: ",result)
        },
        error:(error)=>{
          console.log("El error es: ",error);
          this.toastr.error(error.message,"Change Password failed!",{closeButton:true,easing:"ease-in"});
        }
      }
    )
    }
    

  }

}
