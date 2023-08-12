import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/model/bloodBank';
import { BloodBankService } from '../../blood-bank.service';

@Component({
  selector: 'app-blood-bank-list',
  templateUrl: './blood-bank-list.component.html',
  styleUrls: ['./blood-bank-list.component.css']
})
export class BloodBankListComponent {
  constructor(private bloodBankSvc:BloodBankService,private route:ActivatedRoute) {}
  bloodBanks: BloodBank[] = [];
  bloodType:string='';

  ngOnInit() {
    this.bloodBanks=this.bloodBankSvc.getBloodBanks();
    console.log(this.bloodBanks);
    this.bloodType=this.route.snapshot.queryParams['type'] as string;
  }
}
