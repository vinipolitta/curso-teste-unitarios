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

  constructor(private service: HttpService) {}

  ngOnInit(): void {}

  getUserById(id: number) {
    this.service.getUserById(id).subscribe((res) => {
      console.log(res);
    });
  }

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
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
    });
  }

  putUser() {
    const user = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age,
    };
    this.service.putUser(user, 1).subscribe((res) => {
      console.log(res);
    });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe((res) => {
      console.log(res);
    });
  }

  getUsersWhithHeaders() {
    this.service.getUsersWhithHeaders().subscribe((res) => {
      console.log(res);
    });
  }
}
