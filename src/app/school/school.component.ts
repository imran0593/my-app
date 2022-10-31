import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
   
  public schools: any= []
     
  constructor(private _schoolService:SchoolService) { 
    this._schoolService.getschools().subscribe(
      (data:any)=>{
        
        this.schools=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
     )
  }

  ngOnInit(): void {
  }

}
