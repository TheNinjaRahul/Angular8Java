import { LoginService } from './../service/loginService';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService,private routes:Router) { }

  isloggin=false;
  ngOnInit(): void {
    this.isloggin=this.loginService.isLoggin;
  }


  onLogin(){
    this.loginService.checkLogin();
    console.log('login clicked');
    this.routes.navigate(['profiles']);
  }
  onLogout(){
    this.loginService.isLoggin=false;
    this.routes.navigate(['login']);
  }

  gotoMyProfile(){
    this.routes.navigate(['myProfile']);
  }
}
