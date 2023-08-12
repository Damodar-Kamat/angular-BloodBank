import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestPageComponent } from './components/request-page/request-page.component';
import { BloodBankListComponent } from './components/blood-bank-list/blood-bank-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddBloodBankComponent } from './components/add-blood-bank/add-blood-bank.component';
import { UpdateBloodBankComponent } from './components/update-blood-bank/update-blood-bank.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'requestpage',
    component: RequestPageComponent,
  },
  {
    path: 'bloodbanklist',
    component: BloodBankListComponent,
  },
  {
    path:'addbloodbank',
    component:AddBloodBankComponent
  },
  {
    path:'updatebloodbank',
    component:UpdateBloodBankComponent
  },
  {
    path:'',
    component:SignInComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodBankRoutingModule {}
