import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-offer-ride',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './offer-ride.component.html',
  styleUrl: './offer-ride.component.css'
})
export class OfferRideComponent {
  constructor(private router:Router, private mainServiceService: MainServiceService){

  }
  disabled= false;
  rideForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    source:new FormControl('',[Validators.required]),
    destination:new FormControl('',[Validators.required]),
    seats:new FormControl('',[Validators.required]),
    car:new FormControl('',[Validators.required]),
  });
  get name(){
    return this.rideForm.get("name") as FormControl;
  }
  get source(){
    return this.rideForm.get("source") as FormControl;
  }
  get destination(){
    return this.rideForm.get("destination") as FormControl;
  }
  get seats(){
    return this.rideForm.get("seats") as FormControl;
  }
  get car(){
    return this.rideForm.get("car") as FormControl;
  }
  back(){
    this.router.navigate(['home']);
  }
  invalid = false;
  submit(){
    let value:any = this.rideForm.value;
    let requestbody:any ={};
    requestbody['car']=value.car;
    requestbody['name']=value.name;
    requestbody['source']=value.source;
    requestbody['destination']=value.destination;
    requestbody['seatsAvailable']=value.seats;
    this.mainServiceService.offerride(requestbody).subscribe((data)=>{
      this.router.navigate(['home']);
    },
    (error)=>{
      this.invalid = true;
    }
    )

    //value = {...value,id:this.mainServiceService.routes.length+1};
    //this.mainServiceService.routes.push(value);
  }

}
