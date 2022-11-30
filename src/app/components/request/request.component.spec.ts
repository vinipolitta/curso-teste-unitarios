import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;
  let http: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
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

  it('Deve fazer request para obter lista de user pelo id', () => {
    const response = {
      id: 1,
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    spyOn(http, 'getUserById').and.returnValue(of(response));
    component.getUserById(1);
    expect(component.dataById).toEqual(response);
  });

  it('Deve atualizar users', () => {
    const user = {
      id: 1,
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    spyOn(http, 'putUser').and.returnValue(of(user));
    component.putUser(1);
    expect(component.putUsers).toEqual(user);
  });

  it('Deve Criar users', () => {
    const user = {
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    spyOn(http, 'postUser').and.returnValue(of(user));
    component.postUser();
    expect(component.dataPostUser).toEqual(user);
  });

  it('Deve Deletar users', () => {
    const user = {
      id: 1,
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    spyOn(http, 'deleteUser').and.returnValue(of(user));
    component.deleteUser(1);
    expect(component.dataDelete).toEqual(user);
  });

  it('Deve fazer um get e retornar com headers', () => {
    const user = {
      id: 1,
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    spyOn(http, 'getUsersWhithHeaders').and.returnValue(of(user));
    component.getUsersWhithHeaders();
    expect(component.dataHeaders).toEqual(user);
  });


});
