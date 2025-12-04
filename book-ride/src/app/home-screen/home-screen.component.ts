import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { RideDetailsComponent } from '../ride-details/ride-details.component';

@Component({
  selector: 'app-home-screen',
  imports: [CommonModule,RideDetailsComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {
  constructor(private router:Router, private mainServiceService:MainServiceService){

  }
  rides:any[] = [];
  rideclick = false;
  ridedetails:any;
  bookboolean = true;
  ngOnInit(){
    //this.rides = this.mainServiceService.routes;
    this.mainServiceService.getrides().subscribe((data)=>{
       this.rides = data.map((x:any)=>{
        let y:any={};
        y['car']=x['car'];
        y['source'] =x['source'];
        y['destination'] =x['destination'];
        y['seats'] = x['seatsAvailable'];
        y['id'] = x['rideId'];
        y['name'] = x['name'];
        return y;
       });
    })
    this.mainServiceService.getbookings().subscribe((data:Array<any>)=>{
      let list = data;
      if(list.length !=0){
        let x=list[0];
        let y:any={};
        y['car']=x['car'];
        y['source'] =x['source'];
        y['destination'] =x['destination'];
        y['seats'] = x['seatsAvailable'];
        y['id'] = x['rideId'];
        y['name'] = x['name'];
        this.ridedetails= y;
        this.rideclick = true
        this.bookboolean = false;
      }

    })

  }
  showallbuttons = false;
  showallrides(){
    this.showallbuttons = !this.showallbuttons;
  }
  OfferRide(){
    this.router.navigate(['offer']);
  }
  selected(ride:any){
    this.rideclick=true;
    this.ridedetails= ride;

  }
  bookride(id:any){
    this.showallbuttons = false;


  }

}
