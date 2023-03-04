import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient: HttpClient) { }
  base_url: string = environment.base_url;
  getusers(req:any): Observable<any>{
    var url = `${this.base_url}/api/users?page=${req?.page}`;
    return this.httpclient.get<any[]>(url);
  }
  addUser(body:any):  Observable<any>{
    var url= this.base_url+'/api/users',user;
    return this.httpclient.post<any>(url, body)
  }

}
