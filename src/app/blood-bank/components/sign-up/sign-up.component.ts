import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloodBankService } from '../../blood-bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private fb:FormBuilder,private bloodBankSvc:BloodBankService,private router: Router){}

  validUser:boolean=true;

  signUpForm=this.fb.group({
    Username:["",Validators.required],
    Password:['',[Validators.required]]
  })
  signupSubmit()
  {
    if(this.signUpForm.valid)
    {
      this.bloodBankSvc.signUp({
        username:this.signUpForm.value.Username || '',
        password:this.signUpForm.value.Password || '',
        roles:["USER"]
      })
    }
    else{
      this.validUser=false;
    }
  }
}
