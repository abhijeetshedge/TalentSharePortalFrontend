import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDeleteComponent } from './mentor-delete.component';

describe('MentorDeleteComponent', () => {
  let component: MentorDeleteComponent;
  let fixture: ComponentFixture<MentorDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorDeleteComponent]
    });
    fixture = TestBed.createComponent(MentorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
