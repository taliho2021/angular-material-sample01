import { RouterModule, Routes } from '@angular/router';

import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryMasterComponent } from './entry-master/entry-master.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { InvoiceHeaderComponent } from './invoice-header/invoice-header.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'entryMaster', component: EntryMasterComponent},
  {path: 'invoiceHeader', component: InvoiceHeaderComponent},
  {path: 'entrySummary', component: EntrySummaryComponent},
  {path: 'customerInfo', component: CustomerInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
