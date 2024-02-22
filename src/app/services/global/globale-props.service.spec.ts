import { TestBed } from '@angular/core/testing';

import { GlobalePropsService } from './globale-props.service';

describe('GlobalePropsService', () => {
  let service: GlobalePropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalePropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
