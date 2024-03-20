import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { ShowPatientsComponent } from './show-patients/show-patients.component';
import { AddTreatComponent } from './add-treat/add-treat.component';
import { UpdateTreatComponent } from './update-treat/update-treat.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowTreatmentsComponent } from './show-treatments/show-treatments.component';

@NgModule({
  declarations: [
    DoctorComponent,
    ShowPatientsComponent,
    AddTreatComponent,
    UpdateTreatComponent,
    ShowScheduleComponent,
    ShowTreatmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DoctorRoutingModule,
    FormsModule
  ],
  exports:[
    DoctorComponent
  ]
})
export class DoctorModule { }
