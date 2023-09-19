import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMentorsComponent } from './list-of-mentors.component';

describe('ListOfMentorsComponent', () => {
  let component: ListOfMentorsComponent;
  let fixture: ComponentFixture<ListOfMentorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfMentorsComponent]
    });
    fixture = TestBed.createComponent(ListOfMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
