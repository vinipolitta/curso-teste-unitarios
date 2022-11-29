import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-component',
  templateUrl: './async-component.component.html',
  styleUrls: ['./async-component.component.scss'],
})
export class AsyncComponentComponent implements OnInit {
  data: any;
  dataPromisse: any;
  isLogged: boolean;
  name: string;
  constructor(private service: HttpService) {}

  ngOnInit(): void {}

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      this.data = res;
    });
  }

  getUsersWhithPromise() {
    this.service.getUsersWhithPromise().then((res) => {
      this.dataPromisse = res;
    });
  }

  isAuthenticaded() {
    this.service.isAuthenticaded().then((res) => {
      this.isLogged = res;
    });
  }

  defineValue() {
    this.name = 'Vini';
    setTimeout(() => {
      this.name = 'Santos';
    }, 100);
  }
}
