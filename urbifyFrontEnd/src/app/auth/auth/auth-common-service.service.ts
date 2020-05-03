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

  // register professional user function
  registerUser(professionalForm):Observable<registeredUser>{
    return this.http.post<registeredUser>(this.baseUrl+'signup',professionalForm);
  }

  // verify email after registration
  verifyEmail(emailToken):Observable<registeredUser>{
    return this.http.post<registeredUser>(this.baseUrl+'verify',emailToken);
  }

  // login user
  loginUser(loginForm):Observable<registeredUser>{
    return this.http.post<registeredUser>(this.baseUrl+'login',loginForm);
  }

}
