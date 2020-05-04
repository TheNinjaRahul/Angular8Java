import { Profile } from './../model/profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
// import 'rxjs//add/operator/map'
// import 'rxjs/Rx';
// import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class HttpsServices{
    
    constructor(private http:HttpClient){

    }
    profiles: Array<Profile> = [];

    getAllProfiels() : Observable<Profile[]>{
        
       return this.http.get<Profile[]>('http://localhost:8080/getAllProfile') //.subscribe(data=>console.log(data));
        .pipe(map(data=>{
            const postArray:Array<Profile> = [];
            for(const key in data){
               
                let obj=data[key];
                // console.log({data : obj})
                let p= new Profile(obj.id,obj.name,obj.desc,obj.imagePath);
                // console.log({data : p})
                postArray.push(p);
            }
            this.profiles=Object.assign([], postArray);
            // console.log(this.profiles)
            return this.profiles;
            // 
        }));
        
        
    }

    deleteProfile(no:string){
        return this.http.delete('http://localhost:8080/deleteProfile',{
            params :  new HttpParams().set("id",no)
        });
    }

    updateProfile(id:string,desc:string){
        let body = new HttpParams();
        body = body.set('id', id);
        body = body.set('desc', desc);
        return this.http.put('http://localhost:8080/updateProfile',body);
    }

}