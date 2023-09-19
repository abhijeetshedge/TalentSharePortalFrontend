import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorUpdateComponent } from './mentor-update.component';

describe('MentorUpdateComponent', () => {
  let component: MentorUpdateComponent;
  let fixture: ComponentFixture<MentorUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorUpdateComponent]
    });
    fixture = TestBed.createComponent(MentorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
