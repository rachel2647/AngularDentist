import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  id: number | undefined;

  showPatients() {
    this.router.navigate([`doctor/${this.id}/showPatients`])
  }
  addTreatToPatient() {
    this.router.navigate([`doctor/${this.id}/addTreat`])
  }
  updateTreat() {
    this.router.navigate([`doctor/${this.id}/showAllTreats`])
  }
  showSchedule() {
    this.router.navigate([`doctor/${this.id}/showSchedule`])
  }

}
