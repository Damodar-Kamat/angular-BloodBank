import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { BloodBankListComponent } from './components/blood-bank-list/blood-bank-list.component';
import { HomeComponent } from './components/home/home.component';
import { BloodBankRoutingModule } from './blood-bank-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBloodBankComponent } from './components/add-blood-bank/add-blood-bank.component';
import { UpdateBloodBankComponent } from './components/update-blood-bank/update-blood-bank.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [RequestPageComponent, BloodBankListComponent, HomeComponent, AddBloodBankComponent, UpdateBloodBankComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, BloodBankRoutingModule,ReactiveFormsModule], 
})
export class BloodBankModule {}
