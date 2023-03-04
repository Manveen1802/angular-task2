import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  isLoading: any;
  totalRecords: any = 0;
  totalPages: number | undefined;


  constructor(private router: Router, private adminApiService: AdminService) { }


  ngOnInit() {



  }


  getUsers(event: any) {
    console.log(this.users);

    let req: any = {
      "limit": 1000,
      "orderBy": "name",
      "orderDirection": "DESC",
      "page": 1,
    }
    if (event?.filters) {
      req['search'] = {
        name: event?.filters?.global?.value, "active": true,

      }
    }
    this.isLoading = true;
    req.limit = event.rows;
    req.orderBy = event.sortField;
    req.page = event.first / event.rows + 1;
    req.orderDirection = event.sortOrder == -1 ? 'DESC' : 'ASC';
    this.adminApiService.getusers(req).subscribe((res: any) => {
      this.users = res.data;
      this.totalRecords = res?.total;
      this.totalPages = res?.total_pages;
      this.isLoading = false;
    });



  }

  addStudent() {
    this.router.navigateByUrl('admin/Personal-Information')
  }
}

