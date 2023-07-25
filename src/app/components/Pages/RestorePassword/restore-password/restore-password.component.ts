import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  jwt:string|null = null;

  constructor(
    private fb: FormBuilder, 
    private router:Router,
    private activateRoute: ActivatedRoute
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

  }

}
