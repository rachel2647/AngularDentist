import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryComponent } from './secretary/secretary.component';
import { SecretaryRoutingModule } from './secretary-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SecretaryComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    FormsModule
  ],
  exports:[
    SecretaryComponent
  ]
})
export class SecretaryModule { }
