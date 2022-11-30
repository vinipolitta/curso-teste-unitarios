import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-teste-unitarios';
  user: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.user = {name: 'Vinicius', email: 'vinicius@gmail.com', password: '112233'}
  }

  getUserMessage(event: any) {
    console.log('Mensagem do filho: ', event)
  }

  goTo(route: string) {
    this.router.navigate([`/${route}`])
  }
}
