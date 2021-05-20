import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';

// import  { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import  { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatListModule,
    // MatCardModule,
    // MatButtonModule,
    // MatTableModule
    MaterialModule
  ],
  exports : [
    // MatSidenavModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatListModule,
    // MatCardModule,
    // MatButtonModule,
    // MatTableModule
    MaterialModule
  ]
})

export class DashboardModule { }
