import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import  { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {NgModule} from '@angular/core';

@NgModule({
    
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ]
})

export class MaterialModule {}