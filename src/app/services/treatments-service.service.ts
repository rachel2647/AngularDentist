import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import treatment from '../treatment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsServiceService {

  constructor() { }

  treatments: treatment[] = [
    { date: new Date(2023, 11, 13), duration: 25, patient: { doctorId: 5, idNumber: "123456789", id: 1, name: "rachel", tel: "0548572647" }, id: 7 }
    , { date: new Date(2023, 10, 1), duration: 5, patient: { doctorId: 2, idNumber: "987654321", id: 2, name: "cc", tel: "000000000" }, id: 6 }
    , { date: new Date(2023, 1, 25), duration: 15, patient: { doctorId: 2, idNumber: "852963741", id: 3, name: "xx", tel: "1111111111" }, id: 8 }
    , { date: new Date(2023, 12, 31), duration: 45, patient: { doctorId: 3, idNumber: "111111111", id: 4, name: "aa", tel: "2222222222" }, id: 17 }
    , { date: new Date(), duration: 10, patient: { doctorId: 4, idNumber: "123456789", id: 5, name: "rr", tel: "0548574726" }, id: 12 }
  ]

  addTreatment(treat: treatment) {
    this.treatments.push(treat);
    console.log(this.treatments)
  }
  getAllTreatments(): treatment[] {
    return this.treatments;
  }


}
