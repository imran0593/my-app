import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  
  public column:string="";
  public order:string="";

  public vehicles:any =[];
  public term:string ="";

  constructor(private _vehicleService:VehicleService) { 
    
      this._vehicleService.getVehicles().subscribe(
       (data:any)=>{
         
         this.vehicles=data;
       },
       (err:any)=>{
         alert("Internal server error");
       }
      )
    }
  

  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
}
pagination(page:number){
  this._vehicleService.getPagedVehicles(page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
sort(){
  this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}

}
