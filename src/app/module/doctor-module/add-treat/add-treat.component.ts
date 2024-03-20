import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreatmentsServiceService } from 'src/app/services/treatments-service.service';
import treatment from 'src/app/treatment';

@Component({
  selector: 'add-treat',
  templateUrl: './add-treat.component.html',
  styleUrls: ['./add-treat.component.css']
})
export class AddTreatComponent {

  constructor(private route: ActivatedRoute, private treatmentsService: TreatmentsServiceService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  id: number = 2;
  doctorId: number = 4
  newTreatment: treatment = { id: this.id, patient: { id: 5, idNumber: "a", name: "", tel: "", doctorId: this.doctorId }, date: new Date(), duration: 0 }

  saveTreat() {
    console.log(this.newTreatment)
    this.treatmentsService.addTreatment(this.newTreatment);
  }
}
