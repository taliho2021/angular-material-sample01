import {ButtonModule} from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    CommonModule,
    CalendarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
