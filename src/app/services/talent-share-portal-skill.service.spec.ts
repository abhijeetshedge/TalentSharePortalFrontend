import { TestBed } from '@angular/core/testing';

import { TalentSharePortalSkillService } from './talent-share-portal-skill.service';

describe('TalentSharePortalSkillService', () => {
  let service: TalentSharePortalSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentSharePortalSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
