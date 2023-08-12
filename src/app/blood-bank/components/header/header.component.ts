import { Component } from '@angular/core';
import { BloodBankService } from '../../blood-bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  adminUser:boolean=false;
  signedIn:boolean=false;
  constructor(private bloodBankSvc:BloodBankService,private router:Router){}
  ngOnInit()
  {
    this.bloodBankSvc.adminUser$.subscribe((signedIn) => {
      this.adminUser = signedIn;
    });
    this.bloodBankSvc.signedIn$.subscribe((signedIn) => {
      this.signedIn = signedIn;
    });
  }
  signOut() {
    this.adminUser=false;
    this.signedIn=false;
    this.router.navigateByUrl('/'); 
  }
}
