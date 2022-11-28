import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it('Deve testar o uso do matcher toBe', () => {
    let nomes = ['Vini', 'Carlos', 'Jose'];
    let nomes2 = ['Vini', 'Carlos', 'Jose'];

    let age = 10;
    expect(age).toBe(10);
  });

  it('Deve testar o uso do matcher toBeTruth', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  });

  it('Deve testar o uso do matcher toBeFalsy', () => {
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  it('Deve testar o uso do matcher toBeTrue', () => {
    expect(true).toBeTrue();
  });

  it('Deve testar o uso do matcher toBeFalse', () => {
    expect(false).toBeFalse();
  });

  it('Deve testar o uso do matcher not', () => {
    expect('Danilo').not.toEqual('Jessica');
  });

  it('Deve testar o uso do matcher ToContain', () => {
    expect('Marvel').toContain('Marve');
    expect([1,2,3]).toContain(1);
  });

  it('Deve testar o uso do matcher toBeDefined', () => {
    let name;
    name = 'testy'
    expect(name).toBeDefined();
  });

  it('Deve testar o uso do matcher toBeDefined', () => {
    let name;
    expect(name).toBeUndefined();
  });

  it('Deve testar o uso do matcher toBeNull', () => {
    let name;
    name = null
    expect(name).toBeNull();
  });

  it('Deve testar o uso do matcher toBeNaN', () => {
    expect(NaN).toBeNaN();
  });

  it('Deve testar o uso do matcher toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(2);
  });

  it('Deve testar o uso do matcher toBeLessThan', () => {
    expect(10).toBeLessThan(20);
  });

  it('Deve testar o uso do matcher toBeCloseTo', () => {
    expect(11.23).toBeCloseTo(11.2, 1);
  });

  it('Deve testar o uso do matcher toMatch', () => {
    expect('Marvel').toMatch(/vel/);
  });

  it('Deve testar o uso do matcher toThrow', () => {
    expect(() => {
      throw new Error('Meu Error')
    }).toThrow()
  });
});
