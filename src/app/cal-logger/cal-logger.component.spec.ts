import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalLoggerComponent } from './cal-logger.component';

describe('CalLoggerComponent', () => {
  let component: CalLoggerComponent;
  let fixture: ComponentFixture<CalLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
