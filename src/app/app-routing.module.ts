import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryMasterComponent } from './entry-master/entry-master.component';
import { InvoiceHeaderComponent } from './invoice-header/invoice-header.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'entryMaster', component: EntryMasterComponent},
  {path: 'invoiceHeader', component: InvoiceHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
