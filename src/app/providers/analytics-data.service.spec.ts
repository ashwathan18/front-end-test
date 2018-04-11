import { TestBed, inject } from '@angular/core/testing';

import { AnalyticsDataService } from './analytics-data.service';

describe('AnalyticsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticsDataService]
    });
  });

  it('should be created', inject([AnalyticsDataService], (service: AnalyticsDataService) => {
    expect(service).toBeTruthy();
  }));
});
