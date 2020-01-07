import { TestBed } from '@angular/core/testing';

import { AppSeoService } from './app-seo.service';

describe('AppSeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSeoService = TestBed.get(AppSeoService);
    expect(service).toBeTruthy();
  });
});
