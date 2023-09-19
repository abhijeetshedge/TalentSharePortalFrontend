import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewComponent } from './mentor-view.component';

describe('MentorViewComponent', () => {
  let component: MentorViewComponent;
  let fixture: ComponentFixture<MentorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorViewComponent]
    });
    fixture = TestBed.createComponent(MentorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
