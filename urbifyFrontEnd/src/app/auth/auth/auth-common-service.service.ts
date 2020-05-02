import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthCommonService {
  public baseUrl = 'http://localhost:3000/api/v1/users/'
  constructor(public http: HttpClient) { }

  registerUser(professionalForm){
    return this.http.post(this.baseUrl+'signup',professionalForm);
  }
}
