import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-components',
  templateUrl: './testing-components.component.html',
  styleUrls: ['./testing-components.component.scss']
})
export class TestingComponentsComponent implements OnInit {
  colorYes = 'green'
  colorNo = 'red'

  constructor() { }

  ngOnInit(): void {
  }

}
