import { TestBed } from '@angular/core/testing';

import { TalentSharePortalCategoryService } from './talent-share-portal-category.service';

describe('TalentSharePortalCategoryService', () => {
  let service: TalentSharePortalCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentSharePortalCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
