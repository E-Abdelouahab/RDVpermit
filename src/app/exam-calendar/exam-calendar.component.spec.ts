import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCalendarComponent } from './exam-calendar.component';

describe('ExamCalendarComponent', () => {
  let component: ExamCalendarComponent;
  let fixture: ComponentFixture<ExamCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamCalendarComponent]
    });
    fixture = TestBed.createComponent(ExamCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
