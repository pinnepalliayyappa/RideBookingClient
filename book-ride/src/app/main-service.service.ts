import { Injectable } from '@angular/core';
import { Routes } from './Routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }
  baseurl ='http://localhost:8080';
  routes : any[] = [
    {source:"ammerpet",destination:"mosapet",seats:2,id:1,name:"aa",car:"fff"},
    {source:"kbhb",destination:"birla",seats:5,id:2,name:"aihh",car:"FDFDFDF"},
    {source:"srnager",destination:"gowlidoddy",seats:6,id:3,name:"aahh",car:"FDFDFDF"},
  ];

  login(userdetails:any):Observable<any>{
    return this.http.post(this.baseurl+'/book/userlogin',userdetails,{responseType:"text"});
  }
  offerride(ridedetails:any):Observable<any>{
    return this.http.post(this.baseurl+'/book/offerride',ridedetails);
  }
  getrides():Observable<any>{
    return this.http.get(this.baseurl+'/book/getrides');
  }
  bookride(bookid: any):Observable<any>{
    const userid =sessionStorage.getItem("userId");
    return this.http.get(this.baseurl+'/book/bookride?userid='+sessionStorage.getItem("userId")+'&bookingid='+bookid);
  }
  getbookings():Observable<[]>{
    const userid =sessionStorage.getItem("userId");
    return this.http.get<[]>(this.baseurl+'/book/getbookings/'+userid);

  }
}
