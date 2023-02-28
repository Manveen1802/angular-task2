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
  getusers(page:any){
    var url = `${this.base_url}/api/users?page=${page}`;
    return this.httpclient.get<any>(url);
  }
}
