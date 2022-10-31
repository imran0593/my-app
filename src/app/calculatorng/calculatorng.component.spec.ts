import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorngComponent } from './calculatorng.component';

describe('CalculatorngComponent', () => {
  let component: CalculatorngComponent;
  let fixture: ComponentFixture<CalculatorngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
