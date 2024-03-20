import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreatmentsServiceService } from 'src/app/services/treatments-service.service';
import treatment from 'src/app/treatment';
import {formatDate} from '@angular/common';


@Component({
  selector: 'show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  constructor(private treatsServicd: TreatmentsServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
  ngOnInit(): void {
    this.treats = this.treatsServicd.getAllTreatments()
      .filter((t) => t.patient.doctorId == this.id)
      .filter((t) => t.date.getDate() == this.today.getDate());
  }
  id: number = 0;
  treats: treatment[] = [];
  today: Date = new Date()
  
}
