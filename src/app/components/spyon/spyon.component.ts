import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spyon',
  templateUrl: './spyon.component.html',
  styleUrls: ['./spyon.component.scss'],
})
export class SpyonComponent implements OnInit {
  logged = false;

  constructor() {}

  ngOnInit(): void {}
  isLogged() {
    this.logged = true;
  }
}
