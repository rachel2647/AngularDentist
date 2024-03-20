import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentsServiceService } from 'src/app/services/treatments-service.service';
import treatment from 'src/app/treatment';

@Component({
  selector: 'update-treat',
  templateUrl: './update-treat.component.html',
  styleUrls: ['./update-treat.component.css']
})
export class UpdateTreatComponent implements OnInit {
  constructor(private route: ActivatedRoute, private treatsService: TreatmentsServiceService, private router: Router) {
    this.route.params.subscribe(params => {
      this.treatment = JSON.parse(params['treat'])
      console.log(this.treatment)
    })
  }
  ngOnInit(): void {
    this.treatments = this.treatsService.getAllTreatments();

  }

  treatment: treatment = { id: 0, patient: { id: 0, idNumber: "a", name: "", tel: "", doctorId: 0 }, date: new Date(), duration: 0 };
  treatments: treatment[] = [];

  saveUpdate() {
    this.treatments = this.treatments.filter((t) => t.id != this.treatment.id)
    this.treatments.push(this.treatment);
    alert("succes")
  }
}
