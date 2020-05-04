import { HttpsServices } from './../service/httpsServices';
import { LoginService } from './../service/loginService';
import { Profile } from './../model/profile';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading=false;
  noDataAvailable=false;
  isError=false;
  errorMessage='';
  isSuccess=false;

  desc:string= '';
  isEditOn=false;
  currentProfile:Profile;
  constructor(private loginservice:LoginService,private router:Router,private httpService:HttpsServices) { }

  ngOnInit(): void {
    if(!this.loginservice.isLoggin){
      this.router.navigate(['login']);
    }
    this.currentProfile=this.loginservice.currentProfile;
  }

  editClick(){    
    this.isEditOn=true;
  }

  submitDesc(){
    this.isEditOn=false;
    this.httpService.updateProfile(this.currentProfile.id,this.desc).subscribe(data=>{
      this.isSuccess=true;
      this.isError=false;
    },error=>{
      this.errorMessage=error.message;
      this.isError=true;
    })
  }

}
