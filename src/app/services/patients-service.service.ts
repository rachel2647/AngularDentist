import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import patient from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsServiceService {

  constructor(private _http: HttpClient) { }

  getAllPatientsFromServer(): Observable<patient[]> {
    return this._http.get<patient[]>("https://localhost:44320/api/Patient");
  }
  deletePatientFromServer(id:number):Observable<patient>{
    return this._http.delete<patient>(`https://localhost:44320/api/Patient/${id}`)
  }
  addPatientToServer(patient:patient):Observable<patient>{
    return this._http.post<patient>(`https://localhost:44320/api/Patient`,patient)
  }
}
