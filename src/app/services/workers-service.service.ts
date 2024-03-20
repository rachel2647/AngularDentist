import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import worker from '../worker';

@Injectable({
  providedIn: 'root'
})
export class WorkersServiceService {

  constructor(private _http: HttpClient) { }
  getAllWorkersFromServer(): Observable<worker[]> {
    return this._http.get<worker[]>("https://localhost:44320/api/User");
  }
  deleteWorkerFromServer(id: number): Observable<worker> {
    return this._http.delete<worker>(`https://localhost:44320/api/User/${id}`);
  }
  addNewWorkerToServer(worker: worker): Observable<worker> {
    return this._http.post<worker>(`https://localhost:44320/api/User`, worker)
  }
}