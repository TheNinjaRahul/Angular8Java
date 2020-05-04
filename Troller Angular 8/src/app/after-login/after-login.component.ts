import { HttpsServices } from './../service/httpsServices';
import { Profile } from './../model/profile';
import { LoginService } from './../service/loginService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  isLoading=false;
  noDataAvailable=false;
  isError=false;
  errorMessage='';
  constructor(private httpService:HttpsServices){

  }
  profiles:Profile[];
  ngOnInit(): void {
    this.isLoading=true;
    this.httpService.getAllProfiels().subscribe(data=>
      {
        console.log(data);
        this.profiles=data;
        this.isLoading=false;
        this.isError=false;
        if(data.length==0){
          this.noDataAvailable=true;
        }else{
          this.noDataAvailable=false;
        }
      },error=>{
          this.isError=true;
      });

    // this.httpService.getAllProfiels();
  //  this.profiles=this.httpService.getAllProfiels();
  //  console.log(this.profiles)
  }

  deleteProfile(id:string){
    this.httpService.deleteProfile(id).subscribe(data=>{
      this.isError=false;
      console.log(data)
      if(data){
        this.deleteIdFromProfile(id);
      }
  },error=>{
    this.isError=true;
    console.log({error:error})
    this.errorMessage=error.message;
  });
  }

  deleteIdFromProfile(id:String){
    let deleteProfile:Profile;

   
    let removeIndex=0;
    for (let i = 0; i < this.profiles.length; i++) {
      if(this.profiles[i].id===id){
        removeIndex=i;
        break;
      }
    }
    console.log('removing index:'+removeIndex)
    this.profiles.splice(removeIndex, 1);
  }

}
