import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpyOnServiceService } from './spy-on-service.service';

describe('SpyOnServiceService', () => {
  let service: SpyOnServiceService;
  const logger = jasmine.createSpy('log');
  const status = jasmine.createSpyObj('srtvice', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpyOnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de users', () => {
    const response = [
      {
        nome: 'vinicius',
        email: 'vinicius@gmail.com',
        age: 18,
      },
      {
        nome: 'santos',
        email: 'santos@gmail.com',
        age: 28,
      },
    ];
    spyOn(service, 'getUsers').and.returnValue(of(response));

    service.getUsers().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });

  it('Deve criar metodo com jasmine.createSpy', () => {
    logger('Loguei no sistema');

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema');
  });

  it('Deve criar metodos com jasmine.createSpyObj', () => {
    status.name('vinicius');
    status.email('vinicius@gmail.com');
    status.age(50)

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('vinicius');
    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith('vinicius@gmail.com');
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith(50);
  });
});
