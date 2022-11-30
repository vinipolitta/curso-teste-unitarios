import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FillFormComponent } from './fill-form.component';

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillFormComponent],
      providers: [{ provide: FormBuilder }],
    }).compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve preencher campos do form', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Vinicius';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('Vinicius');
  });
});
