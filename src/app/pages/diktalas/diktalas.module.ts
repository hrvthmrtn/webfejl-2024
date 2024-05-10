import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiktalasRoutingModule } from './diktalas-routing.module';
import { DiktalasComponent } from './diktalas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';

import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DiktalasComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    DiktalasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class DiktalasModule { }
