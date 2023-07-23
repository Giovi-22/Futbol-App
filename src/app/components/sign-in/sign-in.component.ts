import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { SessionManagerService } from 'src/app/domain/managers/session-manager.service';
import { LogIn } from 'src/app/models/interfaces/session.interfaces';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formSession!:FormGroup;
  constructor(
    private fb: FormBuilder, 
    private sessionM: SessionManagerService,
    private cookieService: CookieService,
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
    this.sessionM.logIn(sessionDto).subscribe(
      (response)=>{
        console.log("Los datos del usuario son: ",response)
        if(response.status){
          this.router.navigate(["/"])
        }
      },
      (error)=>{
        console.log("dentro de singin component")
        this.router.navigate(['notfound',error])
      }
    )
    console.log("valores del form: ",this.formSession.value)
  }

}
