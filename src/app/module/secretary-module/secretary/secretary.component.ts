import { Component } from '@angular/core';
import { TreatmentsServiceService } from 'src/app/services/treatments-service.service';
import treatment from 'src/app/treatment';

@Component({
  selector: 'secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent {
  constructor(private treatsService: TreatmentsServiceService) { }

  clicked: boolean = false;
  newTreatment: treatment = { id: 0, patient: { id: 5, idNumber: "a", name: "", tel: "", doctorId: 0 }, date: new Date(), duration: 0 }

  saveTreat() {
    this.treatsService.addTreatment(this.newTreatment);
    this.clicked = false;
  }
}
