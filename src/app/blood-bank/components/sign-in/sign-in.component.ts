import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloodBankService } from '../../blood-bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private fb:FormBuilder,private bloodBankSvc:BloodBankService,private router: Router){}

  validUser:boolean=true;

  signInForm=this.fb.group({
    Username:["",Validators.required],
    Password:['',[Validators.required]]
  })

  ngOnInit()
  {
    this.bloodBankSvc.getAllUsers();
  }
  signinSubmit()
  {
    if(this.signInForm.valid)
    {
      this.validUser=this.bloodBankSvc.userAuth(this.signInForm.value.Username as string,this.signInForm.value.Password as string);
      if(this.validUser===true)
      this.router.navigateByUrl('/home');
    }
    if(this.signInForm.invalid)
    this.validUser=false;
  }

  
}
