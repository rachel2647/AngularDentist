import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import patient from 'src/app/patient';
import { PatientsServiceService } from 'src/app/services/patients-service.service';

@Component({
  selector: 'show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css']
})
export class ShowPatientsComponent implements OnInit {

  constructor(private patientsService: PatientsServiceService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  ngOnInit(): void {
    this.patientsService.getAllPatientsFromServer().subscribe((p) => { this.patients = p.filter(pa => pa.doctorId == this.id) })
  }
  patients: patient[] = [];
  id: number = 0;
  newPatientId: number = 5;
  touched: boolean = false;
  newPatient: patient = { id: this.newPatientId, name: "", doctorId: this.id, idNumber: "", tel: "" }
  deletePatient(id: number) {
    this.patientsService.deletePatientFromServer(id).subscribe((p) => this.patients = this.patients.filter(pa => pa.id != id));
  }
  addPatient() {
    this.touched = true;
  }
  savePatient() {
    this.patientsService.addPatientToServer(this.newPatient).subscribe(() => { this.patients.push(this.newPatient) }
    );
    this.newPatientId++;
    this.touched = false;
  }
  
}
