import { TestBed } from '@angular/core/testing';
import { TalentSharePortalMentorService } from './talent-share-portal-mentor.service';

describe('TalentSharePortalServiceService', () => {
  let service: TalentSharePortalMentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentSharePortalMentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
