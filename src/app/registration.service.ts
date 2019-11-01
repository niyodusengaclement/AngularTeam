import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url= 'http://localhost:5000/db/register';
 
  constructor(private _http:HttpClient ) { }

  register(data){
    return this._http.post<any>(this._url,data);
  }

  
}
