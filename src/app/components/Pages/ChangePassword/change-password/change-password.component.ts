import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
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
    private sessionM: SessionManagerService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.email.value){
      console.log("El email es: ",this.email.value);
    this.sessionM.changePassword(this.email.value).subscribe(
      {
        next:(result)=>{console.log("el resultado es: ",result)},
        error:(error)=>console.log("El error es: ",error)
      }
    )
    }
    

  }

}
