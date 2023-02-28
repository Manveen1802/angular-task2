import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
users:any
  display: boolean = false;
  constructor(private router: Router, private adminapiservice:AdminService ) { }


  ngOnInit() {
    
   this.adminapiservice.getusers(2).subscribe((response: any) => {
    this.users = response.data;
    console.log(this.users);  
  });
  
  }
  
  addstudent() {
    this.router.navigateByUrl('admin/Personal-Information')
}
}

