import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingComponentsComponent } from './testing-components.component';

describe('TestingComponentsComponent', () => {
  let component: TestingComponentsComponent;
  let fixture: ComponentFixture<TestingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve acessar elemento na DOM com debugElement.query()', () => {
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(title.textContent).toBe(
      'Trabalhando com debuggerElement.query() e nativeElement.querySelector()'
    );
  });

  it('Deve acessar elemento na DOM com nativeElement.querySelector()', () => {
    let paragraph = fixture.debugElement.nativeElement.querySelector('p');

    expect(paragraph.textContent).toBe('Esta aprendendo com curso de testes unitarios?');
  });

  it('Deve verificar background color green btn sim', () => {
    let btnYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement

    expect(btnYes.style.backgroundColor).toBe('green');
  })

  it('Deve verificar background color red btn no', () => {
    let btnNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement

    expect(btnNo.style.backgroundColor).toBe('red');
  })
});
