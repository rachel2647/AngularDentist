import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreatmentsServiceService } from 'src/app/services/treatments-service.service';
import treatment from 'src/app/treatment';

@Component({
  selector: 'show-treatments',
  templateUrl: './show-treatments.component.html',
  styleUrls: ['./show-treatments.component.css']
})
export class ShowTreatmentsComponent implements OnInit {

  constructor(private treatmentsService: TreatmentsServiceService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    })
  }

  ngOnInit(): void {
    this.treatments = this.treatmentsService.getAllTreatments();
  }

  treatments: treatment[] = [];
  id: number | undefined;
  treat: any

  updateTreat(t: treatment) {
    this.treat = JSON.stringify(t)
    this.router.navigate([`doctor/${this.id}/updateTreat/${this.treat}`])
  }

}
