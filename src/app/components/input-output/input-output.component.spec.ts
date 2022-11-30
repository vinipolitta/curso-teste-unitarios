import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputOutputComponent } from './input-output.component';

describe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve Receber usuarios', () => {
    const user = {
      name: 'Vinicius',
      email: 'vinicius@gmail.com',
      password: '112233',
    };

    component.user = user;

    expect(component.user).toBe(user);
  });

  it('Deve emitir msg quando clicar no btn', () => {
    const emitMsgSpy = spyOn(component.userMessage, 'emit');

    let btn = fixture.debugElement.query(By.css('button')).nativeElement

    btn.click();

    expect(emitMsgSpy).toHaveBeenCalled();
   });
});
