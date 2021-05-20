import {Component, OnInit} from '@angular/core';

import {DataService} from '../data/data.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {Post} from '../Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {}
  
  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}