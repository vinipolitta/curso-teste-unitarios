import { MyServiceService } from './../../services/my-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  data: Object;
  dataById: Object;
  putUsers: Object;
  dataPostUser: Object;
  dataDelete: Object;
  dataHeaders: Object;

  constructor(private service: HttpService) {}

  ngOnInit(): void {}

  getUserById(id: number) {
    this.service.getUserById(id).subscribe((res) => {
      this.dataById = res;
    });
  }

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      this.data = res;
    });
  }

  postUser() {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age,
    };

    this.service.postUser(user).subscribe((res) => {
      console.log(res);
      this.dataPostUser = res
    });
  }

  putUser(id:number) {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age,
    };
    this.service.putUser(user, id).subscribe((res) => {
      console.log(res);
      this.putUsers = res;

    });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.dataDelete = res;
    });
  }

  getUsersWhithHeaders() {
    this.service.getUsersWhithHeaders().subscribe((res) => {
      console.log(res);
      this.dataHeaders = res;
    });
  }
}
