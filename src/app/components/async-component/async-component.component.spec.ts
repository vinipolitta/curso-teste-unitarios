import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

import { AsyncComponentComponent } from './async-component.component';

describe('AsyncComponentComponent', () => {
  let component: AsyncComponentComponent;
  let fixture: ComponentFixture<AsyncComponentComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncComponentComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer request para obter lista de users async', () => {
    const response = [
      {
        id: 1,
        name: 'Vinicius Politta dos Santos',
        email: 'nayelen.kretli1@gmail.com',
        age: '21',
      },
      {
        id: 0.7355082676604179,
        name: 'Politta',
        age: 39,
      },
      {
        id: 0.8660304938666026,
        name: 'Politta',
        age: 39,
      },
    ];

    spyOn(http, 'getUsers').and.returnValue(of(response));
    component.getUsers();
    expect(component.data).toEqual(response);
  });

  it('Deve fazer chamada para obter lista de usuarios com promise', async () => {
    const response = [
      {
        id: 1,
        name: 'Vinicius',
        email: 'teste1@gmail.com',
        age: '23',
      },
      {
        id: 2,
        name: 'Politta',
        email: 'teste32@gmail.com',
        age: '22',
      },
      {
        id: 3,
        name: 'Santos',
        email: 'teste@gmail.com',
        age: '21',
      },
    ];

    spyOn(http, 'getUsersWhithPromise').and.returnValue(
      Promise.resolve(response)
    );
    await component.getUsersWhithPromise();

    expect(component.dataPromisse).toEqual(response);
  });

  it('Deve logar usuario', (done: DoneFn) => {
    const loggedOut = fixture.debugElement.query(
      By.css('.logged-out')
    ).nativeElement;

    let spy = spyOn(http, 'isAuthenticaded').and.returnValue(
      Promise.resolve(true)
    );
    component.isAuthenticaded();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(
        By.css('.logged')
      ).nativeElement;

      expect(logged.textContent).toBe('Logado');
      done();
    });

    expect(loggedOut.textContent).toBe('Deslogado');
  });

  it('Deve logar usuario com whenStable', async () => {
    const loggedOut = fixture.debugElement.query(
      By.css('.logged-out')
    ).nativeElement;

    expect(loggedOut.textContent).toBe('Deslogado');

    spyOn(http, 'isAuthenticaded').and.returnValue(Promise.resolve(true));

    component.isAuthenticaded();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const logged = fixture.debugElement.query(
        By.css('.logged')
      ).nativeElement;
      expect(logged.textContent).toBe('Logado');
    });
  });

  it('Deve setar Nome', fakeAsync(() => {
    component.defineValue();

    tick(100);
    expect(component.name).toBe('Santos');
  }));
});
