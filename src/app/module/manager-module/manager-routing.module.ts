import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkerComponent } from './add-worker/add-worker.component';

import { WorkersListComponent } from './workers-list/workers-list.component';

const routes: Routes = [
  {
    path: "",
    component: WorkersListComponent
  },
  {
    path: "addWorker",
    component: AddWorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
