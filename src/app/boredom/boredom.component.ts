import { Component, OnInit } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent implements OnInit {

  public boredoms:any=[]

  constructor(private _boredomServices:BoredomService) { 
    this._boredomServices.getboredoms().subscribe(
      (data:any)=>{
        
        this.boredoms=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
     )
  }

  ngOnInit(): void {
  }

}
