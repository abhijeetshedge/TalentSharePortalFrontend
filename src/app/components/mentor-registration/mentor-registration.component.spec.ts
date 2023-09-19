import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRegistrationComponent } from './mentor-registration.component';

describe('MentorRegistrationComponent', () => {
  let component: MentorRegistrationComponent;
  let fixture: ComponentFixture<MentorRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorRegistrationComponent]
    });
    fixture = TestBed.createComponent(MentorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
