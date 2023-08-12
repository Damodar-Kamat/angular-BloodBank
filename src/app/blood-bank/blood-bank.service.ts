import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BloodBank, User } from '../model/bloodBank';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  users:User[]=[];
  //[{username:'admin',password:'admin'},{username:'user1',password:'user1'},{username:'user2',password:'user2'}];

  // validUser:boolean=false;
  private adminUser = new BehaviorSubject<boolean>(false);
  adminUser$: Observable<boolean> = this.adminUser.asObservable();
  private signedIn = new BehaviorSubject<boolean>(false);
  signedIn$: Observable<boolean> = this.signedIn.asObservable();
  constructor(private http: HttpClient,private router:Router) { }

  @Input() bloodBanks:BloodBank[]=[];

  getAllUsers() {
    this.http.get<User[]>("http://localhost:8080/user-api/v1/appUser/getall")
      .subscribe((data) => {
        this.users = data; 
      });
  }
  
  getBloodBanks()
  {
    return this.bloodBanks;
  }

  storeBloodBanks(bloodBanks:BloodBank[])
  {
    this.bloodBanks=bloodBanks;
  }
  baseUrl="http://localhost:8080/bloodbank-api/v1/bloodbank"
  getBloodBank(bloodType:string|null|undefined,bloodUnits:number|null|undefined){
    return this.http.get<BloodBank[]>(`${this.baseUrl}/${bloodType}/${bloodUnits}`);
  }

  addUrl="http://localhost:8080/bloodbank-api/v1/admin/bloodbanks"
  addBloodBank(item:BloodBank)
  {
    this.http.post(this.addUrl, item).subscribe(
      response => {
        console.log('Data sent successfully:', response);
      },
      error => {
        console.error('Error sending data:', error);
      }
    );
  }

  updateUrl="http://localhost:8080/bloodbank-api/v1/admin/updatebloodbank"
  updateBloodBank(item:BloodBank)
  {
    this.http.put(this.updateUrl, item).subscribe(
      response => {
        console.log('Data sent successfully:', response);
      },
      error => {
        console.error('Error sending data:', error);
      }
    );
  }

  userAuth(username:string,password:string)
  {
    const user=this.users.find((user)=>user.username===username);
    if(user?.password===password){
      if(user.username==='admin')
      {
        this.adminUser.next(true);
      }
      this.signedIn.next(true);
    return true;
    }
  else
  {
  return false;
  }
  }
  signUp(item:User)
  {
    this.http.post("http://localhost:8080/user-api/v1/app-users", item).subscribe(
      response => {
        console.log('Data sent successfully:', response);
        this.router.navigateByUrl('/');
      },
      error => {
        console.error('Error sending data:', error);
      }
    );
  }
}
