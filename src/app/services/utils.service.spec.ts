import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UserService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get correct class to show vehicle image', () => {
    expect(service.getVehicleClass('A1')).toEqual('a1-image');
    expect(service.getVehicleClass('Q7')).toEqual('q7-image');
    expect(service.getVehicleClass('TT')).toEqual('tt-image');
  });
});
