import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private apiBaseUrl = 'http://localhost:3000/api/v1/users/'
  constructor(
    private http: HttpClient
  ) { }

  public getProfileInfo(profileId: string) {
    return this.http.get(this.apiBaseUrl+profileId+'/details')
  }
}
