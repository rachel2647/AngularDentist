import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTreatComponent } from './add-treat/add-treat.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ShowPatientsComponent } from './show-patients/show-patients.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';
import { ShowTreatmentsComponent } from './show-treatments/show-treatments.component';
import { UpdateTreatComponent } from './update-treat/update-treat.component';

const routes: Routes = [
  {
    path: "",
    component: DoctorComponent
  },
  {
    path: "showPatients",
    component: ShowPatientsComponent
  },
  {
    path: "addTreat",
    component: AddTreatComponent
  },
  {
    path: "showAllTreats",
    component: ShowTreatmentsComponent
  },
  {
    path: "updateTreat/:treat",
    component: UpdateTreatComponent
  },
  {
    path: "showSchedule",
    component: ShowScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
