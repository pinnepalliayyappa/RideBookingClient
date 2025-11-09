import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalid = false;
  constructor(private router : Router, private MainServiceservice: MainServiceService){

  }

  loginform = new UntypedFormGroup({
    UserName : new UntypedFormControl('',[Validators.required]),
    Password : new UntypedFormControl('',[Validators.required])
  })
  submit(){
    let request ={username:this.loginform.controls['UserName'].value,password: this.loginform.controls['Password'].value};
    this.MainServiceservice.login(request).subscribe((response)=>{
      if(response != "0"){
        console.log("login completed");
        this.router.navigate(['/home']);
        sessionStorage.setItem("userId",response);
      }
      else{
        this.invalid = true;
        setTimeout(() =>{this.invalid = false;},3000);
        console.log("not correct user");
      }

    },
    (error)=>{
      this.invalid = true;
      setTimeout(() =>{this.invalid = false;},3000);
      console.log("not correct user");

    })

    // if(this.loginform.controls['UserName'].value=='Username' && this.loginform.controls['Password'].value=='Password' ){
    //   console.log("login completed");
    //   this.router.navigate(['/home']);
    // }
    // else{
    //   this.invalid = true;
    //   setTimeout(() =>{this.invalid = false;},3000);
    //   console.log("not correct user");
    // }
  }
  get Password(){
    return this.loginform.get('Password') as UntypedFormControl;
  }
  get UserName(){
    return this.loginform.get('UserName') as UntypedFormControl;
  }

}
