import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "manager",
    loadChildren: () => import('./module/manager-module/manager.module').then(m => m.ManagerModule)
  },

  {
    path: "doctor/:id",
    loadChildren: () => import('./module/doctor-module/doctor.module').then(m => m.DoctorModule)
  },

  {
    path: "secretary",
    loadChildren: () => import('./module/secretary-module/secretary.module').then(m => m.SecretaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
