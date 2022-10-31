import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredomService {

  constructor(private _hhtpClinet:HttpClient) { }
  getboredoms():Observable<any>{
    return this._hhtpClinet.get("https://www.boredapi.com/api/activity")
  }
}
