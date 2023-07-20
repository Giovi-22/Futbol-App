import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formSession = this.fb.group({
      email:[""],
      password:[""]
    })
  }

  onSubmit(){
    console.log("valores del form: ",this.formSession.value)
  }

}
