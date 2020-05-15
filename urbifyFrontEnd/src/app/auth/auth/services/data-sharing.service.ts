import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  public registerFormData = new BehaviorSubject<any>(null);
  public registerFormData$ = this.registerFormData.asObservable();

  getRegisteredUserData(data){
    this.registerFormData.next(data);
  }

}
