import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',component:LoginComponent},
    {path:'home',component:HomeScreenComponent},
    {path:'offer',component:OfferRideComponent}
];
