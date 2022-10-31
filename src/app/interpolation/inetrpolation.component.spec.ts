import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InetrpolationComponent } from './inetrpolation.component';

describe('InetrpolationComponent', () => {
  let component: InetrpolationComponent;
  let fixture: ComponentFixture<InetrpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InetrpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InetrpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
