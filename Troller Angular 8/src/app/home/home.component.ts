import { LoginService } from './../service/loginService';
import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isloggedIn=false;
  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.isloggedIn=this.loginService.isLoggin;
    if(this.isloggedIn){
      this.router.navigate(['/myProfile']);
    }
  }

}
