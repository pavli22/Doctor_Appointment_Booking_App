import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { FormGroup } from '@angular/forms';
import { registerHospital, registerHospital_API_response } from './../interfaces/Interfaces_';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(private _HttpClient: HttpClient) { }

  registerHospital(Data: registerHospital): Observable<registerHospital_API_response> {
    return this._HttpClient.post<registerHospital_API_response>(`${environment.baseURL}/AddNewHospital`, Data);
  }
}
