import { Component, OnInit } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  public Gmails:any=[]

  constructor(private _gmailservices:GmailService) { 
    this._gmailservices.getGmails().subscribe(
      (data:any)=>{
        
        this.Gmails=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
     )
  }

  ngOnInit(): void {
  }

}
