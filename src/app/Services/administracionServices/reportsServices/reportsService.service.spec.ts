/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReportsServiceService } from './reportsService.service';

describe('Service: ReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportsServiceService]
    });
  });

  it('should ...', inject([ReportsServiceService], (service: ReportsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
