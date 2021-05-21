import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  
  disabled: boolean = true;

  value1: string;

  value2: string;

  value3: string;

  value4: string;

  value5: string = 'Disabled';

  constructor() { }

  ngOnInit(): void {
   
  }

}
