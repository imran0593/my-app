import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  
  public flipkarts: any= []
     
  constructor(private _flipkartServices:FlipkartService) { 
    this._flipkartServices.getServices().subscribe(
      (data:any)=>{
        
        this.flipkarts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
     )
    }
  

  ngOnInit(): void {
  }

}
