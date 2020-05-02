import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registeredUser } from 'src/app/shared/models/registeredUser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthCommonService {
  public baseUrl = 'http://localhost:3000/api/v1/users/'
  constructor(public http: HttpClient) { }

  registerUser(professionalForm):Observable<registeredUser>{
    return this.http.post<registeredUser>(this.baseUrl+'signup',professionalForm);
  }
}
