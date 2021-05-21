import {ButtonModule} from 'primeng/button';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule
  ]
})
export class CustomerInfoModule { }
