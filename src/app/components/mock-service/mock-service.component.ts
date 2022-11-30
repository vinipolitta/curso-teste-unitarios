import { MyServiceService } from '../../services/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-service',
  templateUrl: './mock-service.component.html',
  styleUrls: ['./mock-service.component.scss'],
})
export class MockServiceComponent implements OnInit {
  data: any;
  constructor(private service: MyServiceService) {}

  ngOnInit(): void {}

  getUsers() {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
