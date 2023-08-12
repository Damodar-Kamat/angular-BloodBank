import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloodBankService } from '../../blood-bank.service';
import { BloodBank } from 'src/app/model/bloodBank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent {

  constructor(private fb:FormBuilder,private bloodBankSvc:BloodBankService,private router: Router){}
  //bloodBanks:BloodBank[]=[];

  requestForm=this.fb.group({
    bloodType:["",Validators.required],
    bloodUnits:[0,[Validators.required,Validators.min(1)]]
  })



  requestBlood() {
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
      this.bloodBankSvc.getBloodBank(this.requestForm.value.bloodType, this.requestForm.value.bloodUnits)
        .subscribe({
          next: (bloodBanks:BloodBank[]) => { 
            this.bloodBankSvc.storeBloodBanks(bloodBanks);
            this.router.navigate(['/bloodbanklist'],{queryParams:{type:this.requestForm.value.bloodType}});
          },
          error: (error) => {
            console.error('Error fetching blood bank data:', error);
          }
        });
    }
    
  }
}






