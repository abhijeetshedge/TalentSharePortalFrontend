import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeLoginComponent } from './mentee-login.component';

describe('MenteeLoginComponent', () => {
  let component: MenteeLoginComponent;
  let fixture: ComponentFixture<MenteeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenteeLoginComponent]
    });
    fixture = TestBed.createComponent(MenteeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
