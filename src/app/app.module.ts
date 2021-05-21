import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataService } from './data/data.service';
import { EntryMasterComponent } from './entry-master/entry-master.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvoiceHeaderComponent } from './invoice-header/invoice-header.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './primeNg.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryMasterComponent,
    InvoiceHeaderComponent,
    EntrySummaryComponent,
    WelcomeComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
