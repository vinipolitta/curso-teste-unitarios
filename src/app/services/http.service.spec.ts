import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizer chamada get por id', () => {
    const id = 3;
    const response = {
      nome: 'vinicius',
      email: 'vinicius@gmail.com',
      age: 18,
    };
    service.getUserById(id).subscribe((res) => {
      expect(res).toBe(response);
    });
    const request = httpTestingController.expectOne(`${url}/users/${id}`);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users/${id}`);
    request.flush(response);
  });

  it('Deve realizar chamada GET para obter todos os usuarios', () => {
    service.getUsers().subscribe();
    const response = [
      {
        id: 1,
        nome: 'vinicius',
        email: 'vinicius@gmail.com',
        age: 18,
      },
      {
        id: 2,
        nome: 'Santos',
        email: 'santos@gmail.com',
        age: 30,
      },
    ];
    const request = httpTestingController.expectOne(`${url}/users`);

    request.flush(response);
    service.getUsers().subscribe((res) => {
      expect(res).toBe(response);
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);
  });

  it('Deve gerar erro ao obter usarios', () => {
    service.getUsers().subscribe({
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });
    const request = httpTestingController.expectOne(`${url}/users`);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`);

    request.flush(500, {
      status: 500,
      statusText: 'Erro de rede',
    });
  });

  it('Deve fazer requizicao POST para cadastrar usuario', () => {
    const user = {
      id: 0.5528914590429486,
      name: 'tadsfdsaf',
      age: '333',
    };

    const response = {
      id: 0.8061397950366711,
      name: 'fadsfa',
      email: 'fdfsfd',
      age: '11',
    };

    service.postUser(user).subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users`);

    expect(request.request.method).toBe('POST');
    request.flush(response);
  });

  it('Deve atualizar usuraio', () => {
    const id = 1;
    const user = {
      id: 1,
      name: 'Vinicius',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    const response = {
      id: 1,
      name: 'Vinicius Politta dos Santos',
      email: 'nayelen.kretli1@gmail.com',
      age: '21',
    };

    service.putUser(user, id).subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    expect(request.request.method).toBe('PUT');
    expect(request.request.url).toBe(`${url}/users/${id}`);

    request.flush(response);
  });

  it('Deve deletar usuraio', () => {
    const id = 1;

    const response = {};
    service.deleteUser(id).subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(`${url}/users/${id}`);
    expect(request.request.method).toBe('DELETE');
    expect(request.request.url).toBe(`${url}/users/${id}`);
    request.flush(response);
  });

  it('Deve contar headers na chamada GET', () => {
    service.getUsersWhithHeaders().subscribe();
    const request = httpTestingController.expectOne(`${url}/users`);

    expect(request.request.headers.has('Content-Type')).toEqual(true);
    expect(request.request.headers.has('Authorization')).toEqual(true);
  });
});
