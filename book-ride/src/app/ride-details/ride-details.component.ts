import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ride-details',
  imports: [CommonModule],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.css'
})
export class RideDetailsComponent {
  constructor(private MainServiceService:MainServiceService){}
  bookrideboolean = true;
  @Input() details:any;
  @Input() book:any;
  @Output() messageEvent = new EventEmitter<string>();
  bookride(id: any){
    this.MainServiceService.bookride(id).subscribe((data)=>{
      this.messageEvent.emit(id);
      this.bookrideboolean = false;
           
    })

  }
  cancelbooking(id:any){
    return id;
  }

}
