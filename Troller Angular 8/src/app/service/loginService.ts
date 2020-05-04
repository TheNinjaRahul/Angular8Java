import { Profile } from './../model/profile';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class LoginService{
    public currentProfile:Profile;
    isLoggin=false;


    checkLogin(){
        this.currentProfile=new Profile("1","Rahul","I am IT develper","/assets/images/troll.jpg");
        this.isLoggin=true;
        // console.log(this.currentProfile)
        // this.currentProfile.name="Rahul";
        // this.currentProfile.desc="I am IT developer";
        // this.currentProfile.imagePath='/assets/images/troll.jpg';
    }
}