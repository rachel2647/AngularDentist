import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { RouterModule } from '@angular/router';
import { SecretaryModule } from '../secretary-module/secretary.module';
import { DoctorModule } from '../doctor-module/doctor.module';


@NgModule({
  declarations: [
    WorkersListComponent,
    AddWorkerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ManagerRoutingModule,
    SecretaryModule,
    DoctorModule
  ]
})
export class ManagerModule { }
