import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private _httpCilent:HttpClient) { }
  getGmails():Observable<any>{
    return this._httpCilent.get("https://jsonplaceholder.typicode.com/todos");
  }

}
