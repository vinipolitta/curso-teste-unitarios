import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { MyServiceService } from 'src/app/services/my-service.service';

import { MockServiceComponent } from './mock-service.component';

describe('MockServiceComponent', () => {
  let component: MockServiceComponent;
  let fixture: ComponentFixture<MockServiceComponent>;
  let http: MyServiceService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockServiceComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(MockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(MyServiceService);

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
});
