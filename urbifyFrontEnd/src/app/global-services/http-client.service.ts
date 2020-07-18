import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpClientService {
  private apiBaseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  public getProfileInfo(profileId: string) {
    return this.http.get(
      this.apiBaseUrl + "/get-professional-homepage/" + profileId
    );
  }

  public uploadFiles(profileId: string, path: string, formData: FormData) {
    return this.http.post<string>(
      `${this.apiBaseUrl}/upload-image/${profileId}/${path}`,
      formData
    );
  }
}
