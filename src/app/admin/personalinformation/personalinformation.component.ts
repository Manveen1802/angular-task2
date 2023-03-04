import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.scss']
})
export class PersonalinformationComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient,private adminApiService:AdminService,private router:Router) {
    this.userForm = this.fb.group({
      name: '',
      job: ''
    });

}
createUser(){
  const user = this.userForm.value;
  this.adminApiService.addUser(1).subscribe((response: any) => 
 {
      console.log(this.userForm);
    }, error => {
      console.error('Error creating user', error);
    });
}
}
