import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloodBankService } from '../../blood-bank.service';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';

@Component({
  selector: 'app-add-blood-bank',
  templateUrl: './add-blood-bank.component.html',
  styleUrls: ['./add-blood-bank.component.css']
})
export class AddBloodBankComponent {
  constructor(private fb:FormBuilder,private bloodBankSvc:BloodBankService,private router: Router){}
  //bloodBanks:BloodBank[]=[];

  addForm=this.fb.group({
    bloodBankId:[],
    bloodBankName: ['',Validators.required],
    phoneNumber: ['',Validators.required],
    email: ['',Validators.required],
    a_Post: [],
    a_Neg: [],
    b_Post: [],
    b_Neg: [],
    o_Post: [],
    o_Neg: [],
    ab_Post: [],
    ab_Neg: [],
  })



  addBloodBank() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.bloodBankSvc.addBloodBank({
        bloodBankId:this.addForm.value.bloodBankId || 0,
        bloodBankName:this.addForm.value.bloodBankName ||'',
        phoneNumber:this.addForm.value.phoneNumber || '',
        email:this.addForm.value.email || '',
        a_Post:this.addForm.value.a_Post || 0,
        a_Neg:this.addForm.value.a_Neg || 0,
        b_Post: this.addForm.value.b_Post || 0,
        b_Neg:this.addForm.value.b_Neg ||0,
        o_Post:this.addForm.value.o_Post ||0,
        o_Neg:this.addForm.value.o_Neg ||0,
        ab_Post:this.addForm.value.ab_Post ||0,
        ab_Neg:this.addForm.value.ab_Neg ||0
      })
    }
    
  }
}
