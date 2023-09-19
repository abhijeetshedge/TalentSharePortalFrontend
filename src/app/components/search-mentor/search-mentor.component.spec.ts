import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMentorComponent } from './search-mentor.component';

describe('SearchMentorComponent', () => {
  let component: SearchMentorComponent;
  let fixture: ComponentFixture<SearchMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMentorComponent]
    });
    fixture = TestBed.createComponent(SearchMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
