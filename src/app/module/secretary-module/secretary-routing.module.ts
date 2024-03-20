import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretaryComponent } from './secretary/secretary.component';

const routes: Routes = [
  { path: "", component: SecretaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
