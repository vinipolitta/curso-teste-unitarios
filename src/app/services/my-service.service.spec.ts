import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { MyServiceService } from './my-service.service';

class MyServiceMock extends MyServiceService {
  response = [
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

  override getUsers() {
    return of(this.response);
  }
}

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock,
        },
      ],
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada Http', () => {
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
    service.getUsers().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });
});
