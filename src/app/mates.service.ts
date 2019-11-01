import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMembers} from './members';


@Injectable({
  providedIn: 'root'
})
export class MatesService {

   
  constructor(private http: HttpClient ){ }

  private url:string="../assets/members.json";
  private get_url:string="http://localhost:5000/db/check";
  private log_url:string="http://localhost:5000/db/login";

 
  
  getMembers(): Observable<IMembers[]>{
    return this.http.get<IMembers[]>(this.url);
  }

  setUser(data){
    return this.http.post<any>(this.log_url,data);
  }
  


  getUsers():Observable<any>{
    return this.http.get<any>(this.get_url);
  }
  

}
