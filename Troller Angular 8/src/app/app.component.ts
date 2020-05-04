import { HttpsServices } from './service/httpsServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private httpservice:HttpsServices){

  }
  ngOnInit(){
    // console.log('calling http service')
    // this.httpservice.getAllProfiels();
  }
  title = 'troller';
}
